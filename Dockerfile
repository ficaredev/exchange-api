FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 1335

USER node

CMD [ "npm", "start" ]