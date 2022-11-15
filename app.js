// if (typeof(PhusionPassenger) !== 'undefined') {
//     PhusionPassenger.configure({ autoInstall: false });
// }

// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
// const style=require('./site/style.css');
const script=require('./site/script');
// определяем обработчик для маршрута "/"
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "site/test.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
app.get("/about", function(request, response){

    response.sendFile(__dirname + "site/about.html");
});
app.get("/contact", function(request, response){

    response.sendFile(__dirname + "site/contact.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

// if (typeof(PhusionPassenger) !== 'undefined') {
//     app.listen('passenger');
// } else {
//     app.listen(3000);
// }
