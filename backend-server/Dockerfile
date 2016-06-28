FROM node:6.2.2

WORKDIR /my-node-server

ADD . /my-node-server

RUN npm install

EXPOSE 8081

ENTRYPOINT [ "node", "api-server.js" ]