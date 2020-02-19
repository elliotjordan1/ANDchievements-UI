echo "* * * * *"
echo " * Running Docker App..."
docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm andchievements-ui:latest
echo " * Run Complete..."
echo "* * * * *"