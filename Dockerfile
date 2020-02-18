FROM node:12.1.0

ARG AUTH_TOKEN
ARG API_URL

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

ENV AUTHENTICATION_TOKEN=${AUTH_TOKEN}
ENV API_URL=${API_URL}

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]