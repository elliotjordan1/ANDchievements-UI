FROM node:12.1.0-stretch

ARG AUTH_TOKEN
ARG API_URL

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

RUN echo "AUTHENTICATION_TOKEN="${AUTH_TOKEN} >> ./.env
RUN echo "API_URL="${API_URL} >> ./.env

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]