# DevOnTheRun Notes

> notes taken during the course

https://github.com/glaucia86/jwt-node-vue

npm init -y

npm i express mongoose body-parser cors jsonwebtoken bcrypt bcryptjs morgan dotenv eslint-friendly-formatter

npm i nodemon --save-dev

eslint --init

http://localhost:8080/api/v1

rm -rf node_modules
rm eslint-friendly-formatter from package-json
eslint --init

## Ep 5

HTTP POST /register
HTTP POST /login
HTTP GET /user-profile

https://bezkoder.com/node-js-mongodb-auth-jwt/

docker-compose exec gl-mongo bash

use test;

db.createUser({
user: 'test',
pwd: '123456',
roles: [{ role: 'readWrite', db:'test'}]
})

mongo -u root -p 123mudar

mongo -u dotr --authenticationDatabase jwtAuthDb

https://faun.pub/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3

http://localhost:8080/api/v1/register
form-encoded
name = 'test'
email = 'test@test.com'
password = '132456'

https://code.visualstudio.com/docs/remote/wsl#_debugging-in-wsl

https://github.com/Microsoft/vscode/issues/54593
