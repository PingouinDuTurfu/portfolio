FROM node:latest

EXPOSE 3001

WORKDIR /usr/local/app

COPY package.json .

RUN npm install

COPY ./ /usr/local/app/

CMD ["node", "server.js"]
