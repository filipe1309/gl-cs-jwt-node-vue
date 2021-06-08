FROM node:15.14.0-alpine3.10

WORKDIR /usr/src/app

COPY frontend .

RUN npm i -g @vue/cli

RUN npm i

# CMD ["tail", "-f", "/dev/null"]
CMD ["npm", "run", "start"]
