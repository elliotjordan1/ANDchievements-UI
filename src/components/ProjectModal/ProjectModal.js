import React from 'react';
import PropTypes from 'prop-types';
import { 
  Background, 
  ModalWrapper, 
  HeadingText, 
  ProjectBody, 
  BodyText, 
  ListItem, 
  TechListItem, 
  StackedList, 
  LogoWrapper, 
  Image, 
  Icon, 
  ListDescription, 
  TechList 
} from './styles';

const ProjectModal = ({ image, onClick, name, client, blurbOne, blurbTwo, blurbThree, ANDis, techStack, logo }) => {
  return (
    <>
    <Background onClick={onClick}>
      <ModalWrapper onClick={onClick}>
        <Image image={image}>
          <LogoWrapper image={logo}/>
        </Image>
          <ProjectBody>
            <HeadingText><em>{client}</em><br />{name}</HeadingText>
            <BodyText>{blurbOne}</BodyText>
            {blurbTwo ? <BodyText>{blurbTwo}</BodyText> : null}
            {blurbThree ? <BodyText>{blurbThree}</BodyText> : null}
            <BodyText><b>ANDis</b> <br /></BodyText>
            <StackedList>
              {ANDis && ANDis.map((item) => {
                  let andi;
                  try {
                    andi = JSON.parse(item);                    
                  } catch {
                    andi = item;
                  }
                   return (
                    <ListItem key={andi.andiId}>
                      <Icon image={andi.imageURL}/>
                      <ListDescription>
                        {andi.name}
                        <em>{andi.andiProjectRole}</em>
                      </ListDescription>
                    </ListItem>);
                  }
                )}
            </StackedList>
            <TechList>
              {techStack && techStack.map((item) => {
                  let tech;
                  try {
                    tech = JSON.parse(item);
                  } catch {
                    tech = item;
                  }
                  return (
                    <TechListItem key={tech.technologyId}>
                      <Icon image={tech.imageURL}/>
                    </TechListItem>);
              }
              )}
            </TechList>
          </ProjectBody>
      </ModalWrapper>
    </Background>
    </>
  );
};

ProjectModal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  blurbOne: PropTypes.string.isRequired,
  blurbTwo: PropTypes.string,
  blurbThree: PropTypes.string,
  ANDis: PropTypes.arrayOf(PropTypes.object).isRequired,
  techStack: PropTypes.arrayOf(PropTypes.object).isRequired,
  logo: PropTypes.string.isRequired
};

ProjectModal.defaultProps = {
  blurbTwo: null,
  blurbThree: null
};

export default ProjectModal;
