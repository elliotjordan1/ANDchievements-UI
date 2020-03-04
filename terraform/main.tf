# https://blog.oxalide.io/post/aws-fargate/
# because we share accounts we don't want things to clash - prefix for resources 
variable "name" {
  default = "andchievements" # default value of name
}

variable "user" {
  default = "andchievements" # default value of db user 
}

resource "aws_ecr_repository" "ecr" {
  name = var.name
}

resource "random_password" "db" {
  length = 20
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_default_vpc" "default" {
  tags = {
    Name = "Default VPC"
  }
}

resource "aws_cloudwatch_log_group" "log" {
  name = "/ecs/${var.name}"
}

resource "aws_default_subnet" "default_az1" {
  availability_zone = "eu-west-2a"
  tags = {
    Name = "Default subnet for eu-west-2a"
  }
}

resource "aws_default_subnet" "default_az2" {
  availability_zone = "eu-west-2b"
  tags = {
    Name = "Default subnet for eu-west-2b"
  }
}

resource "aws_security_group" "main" {
  name = var.name

  ingress {
    protocol = "tcp"
    from_port = 80
    to_port = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol = "tcp"
    from_port = "5432"
    to_port = "5432"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "db" {
   source = "terraform-aws-modules/rds/aws"

  identifier = var.name

  engine            = "postgres"
  engine_version    = "11.5"
  instance_class    = "db.t2.micro"
  allocated_storage = 20
  storage_encrypted = false

  # kms_key_id        = "arm:aws:kms:<region>:<account id>:key/<kms key id>"
  name = var.name

  # NOTE: Do NOT use 'user' as the value for 'username' as it throws:
  # "Error creating DB Instance: InvalidParameterValue: MasterUsername
  # user cannot be used as it is a reserved word used by the engine"
  username = var.user

  password = random_password.db.result
  port     = "5432"

  vpc_security_group_ids = [aws_security_group.main.id]

  maintenance_window = "Mon:00:00-Mon:03:00"
  backup_window      = "03:00-06:00"
  # disable backups to create DB faster
  backup_retention_period = 0

  tags = {
    Owner       = "user"
    Environment = "dev"
  }

  enabled_cloudwatch_logs_exports = ["postgresql", "upgrade"]

  # DB subnet group
  subnet_ids = [aws_default_subnet.default_az1.id, aws_default_subnet.default_az2.id]

  # DB parameter group
  family = "postgres11"

  # DB option group
  major_engine_version = "11"

  # Snapshot name upon DB deletion
  final_snapshot_identifier = var.name

  deletion_protection=false
}

resource "aws_ecs_cluster" "cluster" {
  name = var.name
}

module "app_container_definition" {
  source                       = "git::https://github.com/cloudposse/terraform-aws-ecs-container-definition.git?ref=tags/0.21.0"
  container_name               = var.name
  container_image              = aws_ecr_repository.ecr.repository_url
  container_cpu                = 512
  container_memory             = 1024
  essential                    = true
  readonly_root_filesystem     = false
  # entrypoint                   = ["/onboarding-profile-automator/run.sh"]
  # environment                  = [
  #   {},
  # ]
  port_mappings                = [
    {
      containerPort            = 3000 
      hostPort                 = 3000
      protocol                 = "tcp"
    }
  ]
  log_configuration            = {
    logDriver = "awslogs"
    options   = {
      "awslogs-group" = aws_cloudwatch_log_group.log.name
      "awslogs-region" = "eu-west-2"
      "awslogs-stream-prefix" = "ecs"
    }
    secretOptions = null
  }
}

resource "aws_ecs_task_definition" "app" {
  family                   = var.name
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  execution_role_arn =  aws_iam_role.main.arn
  container_definitions = "[${module.app_container_definition.json_map}]"
}

resource "aws_alb" "main" {
  name            = var.name
  subnets         = [aws_default_subnet.default_az1.id, aws_default_subnet.default_az2.id]
  security_groups = [aws_security_group.main.id]
}

resource "aws_alb_target_group" "main" {
  name = var.name
  port = 3000
  protocol = "HTTP"
  vpc_id = aws_default_vpc.default.id
  target_type = "ip"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_alb_listener" "main" {
  load_balancer_arn = aws_alb.main.arn
  port = 80
  protocol = "HTTP"
  default_action {
    target_group_arn = aws_alb_target_group.main.arn
    type = "forward"
  }
  depends_on = [aws_alb_target_group.main]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_iam_role" "main" {
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_policy" "main" {
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "main" {
  policy_arn = aws_iam_policy.main.arn
  role = aws_iam_role.main.name
}


resource "aws_ecs_service" "main" {
  name            = var.name
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  #iam_role        = aws_iam_role.main.arn
  network_configuration {
    assign_public_ip = true
    security_groups = [aws_security_group.main.id]
    subnets         = [aws_default_subnet.default_az1.id]
  }
  load_balancer {
    target_group_arn = aws_alb_target_group.main.arn
    container_name   = var.name
    container_port   = 80
  }
  depends_on = [
    aws_alb_listener.main
  ]
}

output "ecr" {
  value = aws_ecr_repository.ecr.repository_url
}
