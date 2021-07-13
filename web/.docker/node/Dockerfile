FROM node

#RUN apk update; apk upgrade;
#RUN apk add bash

WORKDIR /app/

COPY package.json ./
RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]
