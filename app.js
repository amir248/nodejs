const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
// const style=require('./site/style.css');


//Порт и пути для работы на всех машинах.
const pathS='new';
const port=3007;

const hosT='localhost';
const logiN='debian-sys-maint';
const databasE='nasoberu_nasite';
const passworD='vmHrqP8Ixuf0fDGt';

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
const UrlencodedParser = express.urlencoded({extended: false});

app.use("/"+`${pathS}`+"/login", function(request, response){
  request,
  response.render('login',{
    login: 'login',
    password: 'password'
  })
  // console.log(request.body.login);
});


app.post("/new/login0", UrlencodedParser, function (request, response) {
    if(!request.body){
      return response.sendStatus(400);
    }else{
      console.log('Увы ФыФ!');
    }
// console.log('request');
//     console.log(request.body);
const connection = mysql.createConnection({
  host: hosT,
  user: logiN,
  database: databasE,
  password: passworD
});
let buttonUp;
let her;
let toResponse;
let offResponse;
connection.query("SELECT * FROM barbarians",
  function(err, results, fields) {
//     console.log(err);
//     console.log(results[7]['login']); // собственно данные
//     console.log(fields); // мета-данные полей
  for(let oK=0;oK<results.length;oK++){
    console.log(results[oK]['login']);
    if(results[oK]['login']===`${request.body.login}`&&results[oK]['password']===`${request.body.password}`){
      console.log('name Taken <-----------------------------------XXX');
      buttonUp=true;
    toResponse='vill so oK!!! then login and password'+`${request.body.login}`&&results[oK]['password']===`${request.body.password}`;
      // if(!results[oK]['login']===`${request.body.login}`&&results[oK]['password']===`${request.body.password}`){
      //   console.log('YYYYYYYYYYra!!!');
      // }else{
      //   toResponse='realy oK! but PASSWORD dont\'t workenS!!! ';
      //
      // }
      // return console.log('Login YEST!!! '+toResponse);
    }else if(results[oK]['login']===`${request.body.login}`){
      console.log(buttonUp);
      her='???';
    }else{
      console.log(buttonUp);
      offResponse='unfortunately such a login does not exist! OFF!!';

    }
  };
  if(buttonUp==true){
    response.send(`${request.body.login} `+'-- '+toResponse+'\n <a href="/new/login">to return</a>');
    console.log(buttonUp);
  }else if(buttonUp==false){
    response.send(`${request.body.login} `+'-- '+offResponse+'\n <a href="/new/login">to return</a>');
    console.log(buttonUp);
  }else{
    response.send(`${request.body.login} `+'-- '+her+'\n <a href="/new/login">to return</a>');
    console.log(buttonUp);
  }
});

// ${request.body.password}
// console.log('response');
});

app.post("/"+`${pathS}`+"/login0", UrlencodedParser, function (request, response) {
    const connection = mysql.createConnection({
      host: hosT,
      user: logiN,
      database: databasE,
      password: passworD
    });
    connection.connect(err=>{
      if(err){
        return err;
        console.log('err');
      }else{
        console.log('database--- oK');
      }
    });

    //
    // let userList = "SELECT * FROM `barbarians`";
    // const sql = "INSERT FROM barbarians(login, Name) VALUES(?, ?)";
    connection.query("SELECT * FROM barbarians",
      function(err, results, fields) {
    //     console.log(err);
    //     console.log(results[7]['login']); // собственно данные
    //     console.log(fields); // мета-данные полей
      for(let oK=0;oK<results.length;oK++){
        console.log(results[oK]['login']);
        if(results[oK]['login']==='LOL'){
          console.log('name Taken <-----------------------------------XXX');
        }
      };
    });
    connection.end(err=>{
      if(err){
        return err;
        console.log('err');
      }else{
        console.log('database--- closed');
      }
    });


    // console.log(request.body);
    // response.send(`${request.body.login} - ${request.body.password}`);

    response.render('login', {
      login: `${request.body.login}`,
      password: `${request.body.password}`,
    });
});

app.use("/"+`${pathS}`+"/login", function(request, response){
  const connection = mysql.createConnection({
    host: hosT,
    user: logiN,
    database: databasE,
    password: passworD
  });
  connection.connect(err=>{
    if(err){
      return err;
      console.log('err');
    }else{
      console.log('database--- oK');
    }
  });

  //
  // let userList = "SELECT * FROM `barbarians`";
  // const sql = "INSERT FROM barbarians(login, Name) VALUES(?, ?)";
  connection.query("SELECT * FROM barbarians",
    function(err, results, fields) {
  //     console.log(err);
  //     console.log(results[7]['login']); // собственно данные
  //     console.log(fields); // мета-данные полей
    for(let oK=0;oK<results.length;oK++){
      console.log(results[oK]['login']);
      if(results[oK]['login']==='LOL'){
        console.log('name Taken <-----------------------------------XXX');
      }
    };
  });
  connection.end(err=>{
    if(err){
      return err;
      console.log('err');
    }else{
      console.log('database--- closed');
    }
  });


 response.render('login0', {
   login: `LOL`,
   password: `artilcle O_o`
 });
});//login!



app.get('/'+`${pathS}`+'/register', UrlencodedParser, function (
  request,
  response
) {
  response.render('register',{
    title: 'OK',
    text: 'text'
  })
});

app.post('/'+`${pathS}`+'/register', UrlencodedParser, function (
  request,
  response
) {
  // if (!request.body) return response.sendStatus(400)
  // console.log(request.body);
  // console.log('oK');
  // конфигурация
  const connection = mysql.createConnection({
    host: hosT,
    user: logiN,
    database: databasE,
    password: passworD
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

  if(request.body.Name===''){
    console.log('^_^');
    request.body.Name=''
  }else if(request.body.Lastname===''){
    request.body.Lastname='';
  }else if(request.body.age===''){
      request.body.age='';
  }else{
    console.log('Elser!!!');
  }
  //Добовление записи, сработало!!!
  //-------------------------------
  const sql = `INSERT INTO barbarians(login, password, email, Name, Lastname, age, floor, blod_type, profession, having_children, marital_status, hobby, education) VALUES('${request.body.login}', '${request.body.password}', '${request.body.email}', '${request.body.Name}', '${request.body.Lastname}', ${request.body.age}, '${request.body.floor}', '${request.body.blod_type}', '${request.body.profession}', '${request.body.having_children}', '${request.body.marital_status}', '${request.body.hobby}', '${request.body.edycation}')`;

  connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
  });
  connection.end(err=>{
    if(err){
      return err;
      console.log('err');
    }else{
      console.log('database--- closed');
    }
  });
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
    education: `${request.body.edycation}`
  });
});

// app.get('/new/', function (request, response) {
//   response.send('Главная страница')
// })

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
app.post("/"+`${pathS}`+"/", UrlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userlogin}`);
});
 app.use("/"+`${pathS}`+"/adduser", function(request, response){
  response.render('addUser', {
    title: `title`,
    article: `artilcle O_o`
  });
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

app.get("/"+`${pathS}`+"/", function (request, response) {
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
app.use("/"+`${pathS}`+"/kontakt", function(request, response){
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
app.use("/"+`${pathS}`+"/about", function(request, response){
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

app.get("/"+`${pathS}`+"/contact", function(request, response){

    response.sendFile(__dirname + "/site/contact.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(port);

// if (typeof(PhusionPassenger) !== 'undefined') {
//     app.listen('passenger');
// } else {
//     app.listen(3000);
// }
