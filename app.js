// if (typeof(PhusionPassenger) !== 'undefined') {
//     PhusionPassenger.configure({ autoInstall: false });
// }

// import Foto from '/site/Amir.jpg';
// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
// const style=require('./site/style.css');



app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
const UrlencodedParser = express.urlencoded({extended: false});

app.use("/nodejs/login", function(request, response){
 response.render('login', {
   title: `title`,
   article: `artilcle O_o`
 });
});

app.get('/nodejs/register', UrlencodedParser, function (
  request,
  response
) {
  response.render('register',{
    title: 'OK',
    text: 'text'
  })
})
app.post('/nodejs/register', UrlencodedParser, function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body);
  console.log('oK');
  response.render('register0', {
    login: `${request.body.login}`,
    password: `${request.body.password}`,
    email: `${request.body.email}`,
    Name: `${request.body.Name}`,
    Lastname: `${request.body.Lastname}`,
    age: `${request.body.age}`,
    floor: `${request.body.floor}`,
    blod_type: `${request.body.blod_type}`,
    profession: `${request.body.profession}`,
    having_children: `${request.body.having_children}`,
    marital_status: `${request.body.marital_status}`,
    hobby: `${request.body.hobby}`,
    education: `${request.body.education}`
  });
})

// app.get('/new/', function (request, response) {
//   response.send('Главная страница')
// })

// конфигурация
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'debian-sys-maint',
  database: 'nasoberu_nasite',
  password: 'vmHrqP8Ixuf0fDGt'
});
connection.connect(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- oK');
  }
});

let userList = "SELECT * FROM `barbarians`";

//Добовление записи, сработало!!!
//-------------------------------
const sql = `INSERT INTO barbarians(login, password, email, Name, Lastname, age, floor, blod_type, profession, having_children, marital_status, hobby, education) VALUES("ChikChicly", 'password', 'chikchicy@gmail.com', 'Amir', 'Navrutdinov', 35, 'muzh', '4+', 'programmer', 'none', 'excellent', 'photography', 'programmer')`;

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
//-------------------------------------

// connection.query(userList,(err,result,field)=>{
//   console.log(result[3]);
//   response.render('users', {
//       title: `${result[3]['name']}`,
//       article: `${result[3]['text']}`
//   })
// });
// app.use("/new/users", function(request, response){
//   response.render('users', {
//     title: `${result[3]['title']}`,
//     article: `${result[3]['text']}`
//   });
// });
// console.log(result['login']);
// Add a new user
app.post("/nodejs/", UrlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userlogin}`);
});
 app.use("/nodejs/adduser", function(request, response){
  response.render('addUser', {
    title: `title`,
    article: `artilcle O_o`
  });
});

connection.end(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- closed');
  }
});
//Napis
// fs.readdir('thePhoto',(err,data)=>{
//   // console.log(data);
//   data.forEach(file=>{
//     console.log(file+" "+path.extname(file));
//     // console.log(fs.statSync('thePhoto'/+file));
//   });
// });
// // AhhhtunG!
// let txt = 'oK2';
// for(let oj=0;oj<9;oj++){
//   console.log(oj);
//   fs.writeFile('talk.json', 'oKi'+[oj], (err)=>{
//     if(err) console.log(err);
//   });
// }


// определяем обработчик для маршрута "/"
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

app.get("/nodejs/", function (request, response) {
    response.render("index",{
      title: 'title',
      email: 'email',
      text: 'text',
      emailsVisible: true,
      emails: ['nasoberu@nasobe.ru', 'chikchicly@gmail.com'],
      phone: '+79528885656'
    });
    console.log('index');
});
app.use("/node/kontakt", function(request, response){
  response.render('contact', {
      title: 'Мои контакты',
      name: 'Amir',
      emailsVisible: true,
      emails: ['nasoberu@nasobe.ru', 'chikchicy@gmail.com'],
      phone: '+79528885656',
    })
});
// app.post("/new/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
app.use("/new/about", function(request, response){
    response.render('about', {
      title: ['about','ok'],
      titleVisible: true,
      article: 'article',
      name: "namE"
    });
});
// app.get("/new/about", function(request, response){
//     response.sendFile(__dirname + "/site/about.html");
// });

app.get("/new/contact", function(request, response){

    response.sendFile(__dirname + "/site/contact.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3003);

// if (typeof(PhusionPassenger) !== 'undefined') {
//     app.listen('passenger');
// } else {
//     app.listen(3000);
// }
