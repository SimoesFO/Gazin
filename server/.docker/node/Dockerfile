FROM node:alpine

RUN apk update; apk upgrade;
RUN apk add bash

WORKDIR /usr/app/

COPY package.json ./
RUN npm install

COPY ./ ./

EXPOSE 3333

CMD ["npm", "start"]
