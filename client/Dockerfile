FROM node:20.9.0-alpine3.18

WORKDIR /client

COPY package*.json tsconfig.json webpack.config.ts ./

COPY config/ ./config

COPY public/ ./public

RUN npm i

COPY src/ ./src

EXPOSE 3000

CMD [ "npm", "run", "start" ]
