FROM node

WORKDIR /test

COPY ./package.json /test

RUN npm install

COPY . /test

EXPOSE 80

CMD [ "node", "server.js"]