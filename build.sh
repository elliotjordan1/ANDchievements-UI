echo "* * * * *\n"
echo " * Building Docker Image...\n"
docker build -t andchievements-ui:latest --build-arg AUTH_TOKEN=$AUTHENTICATION_TOKEN --build-arg API_URL=$API_URL .
echo " * Build complete! \n"
echo "* * * * *\n"