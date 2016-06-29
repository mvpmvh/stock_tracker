FROM node:6.2.2

WORKDIR /my-node-server

ADD . /my-node-server

RUN chmod +x /my-node-server/wait_for_elasticsearch.sh

RUN npm install

CMD ["node", "index.js"]