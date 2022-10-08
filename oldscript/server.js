const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs =require('fs');

const os=require('os');
const greeting = require("./greeting");


const server = http.createServer((req, res) => {

  const stream = fs.createReadStream(__dirname + '/test.html'); // Создаем поток чтения файла
      stream.pipe(res); //выводим на страницу считанные данные

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World!!!');

});

let userName = os.userInfo().username;

console.log(userName);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  });

  const User = require("./user.js");

  let oK = new User("Amir", 35);
  oK.sayHi();
