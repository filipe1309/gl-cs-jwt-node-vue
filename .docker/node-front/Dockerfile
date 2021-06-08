FROM node:15.14.0-alpine3.10

WORKDIR /usr/src/app

COPY frontend .

RUN npm i -g nodemon @vue/cli

RUN npm i

# EXPOSE 3001

# CMD ["nodemon", "server.js"]

CMD ["tail", "-f", "/dev/null"]
