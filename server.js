const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
// const style=require('./site/style.css');


//Порт и пути для работы на всех машинах.
const pathS='nodejs';
const port=3000;

const hosT='localhost';
const logiN='debian-sys-maint';
//debian-sys-maint
const databasE='nasoberu_nasite';
//nasoberu_nasite
const passworD='vmHrqP8Ixuf0fDGt';
//vmHrqP8Ixuf0fDGt
// debian-sys-maint',
// database: 'nasoberu_nasite',
// password: 'vmHrqP8Ixuf0fDGt

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
const UrlencodedParser = express.urlencoded({extended: false});

app.use("/"+`${pathS}`+"/login", function(request, response){
  request,
  response.render('login',{
    login: 'lol',
    password: 'password'
  })
  // console.log(request.body.login);
});




  // }//for
  app.listen(port);
