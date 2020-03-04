echo "* * * * *"
echo " * Building Docker Image..."
docker build -t andchievements-ui --build-arg AUTH_TOKEN=$AUTHENTICATION_TOKEN --build-arg API_URL=$API_URL .
echo " * Build complete! "
echo "* * * * *"
