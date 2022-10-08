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


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  });
  
