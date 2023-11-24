FROM node:20.9.0-alpine3.18

WORKDIR /client

# Так... где-то нафигачил... пока сделаю вот такую плохую штуку, сдам на проверку и буду разбираться
COPY . ./

# COPY package*.json tsconfig.json public/ ./
# COPY webpack.config.ts ./
# COPY config/ ./

RUN npm i

# COPY src/ ./src

EXPOSE 3000

CMD [ "npm", "run", "start" ]
