const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const GoogleRecaptcha = require('google-recaptcha');
// const style=require('./site/style.css');


//Порт и пути для работы на всех машинах.
const pathS='new';
const port=3000;

const hosT='localhost';
const logiN='debian-sys-maint';
const databasE='nasoberu_nasite';
const passworD='vmHrqP8Ixuf0fDGt';

// debian-sys-maint',
// database: 'nasoberu_nasite',
// password: 'vmHrqP8Ixuf0fDGt

console.log(__dirname);

// const googleRecaptcha = new GoogleRecaptcha({secret: '6LftiT8jAAAAANlpgupHL7RUnE6rYoZctoAmo9Vh'})
//
// // Some pseudo server code:
//
// http.on('POST', (request, response) => {
//   const recaptchaResponse = request.body['g-recaptcha-response']
//
//   googleRecaptcha.verify({response: recaptchaResponse}, (error) => {
//     if (error) {
//       return response.send({isHuman: false})
//     }
//
//     return response.send({isHuman: true})
//   })
// })


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


app.post("/"+`${pathS}`+"/login0", UrlencodedParser, function (request, response) {
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
      her='password not guten';
    }else{
      console.log(buttonUp);
      offResponse='unfortunately such a login does not exist! OFF!!';

    }
  };
  if(buttonUp==true){
    response.send(`${request.body.login} `+'-- '+toResponse+'\n <a href="/new/login">to return1</a>');
    console.log(buttonUp);
  }else if(buttonUp==false){
    response.send(`${request.body.login} `+'-- '+offResponse+'\n <a href="/new/login">to return2</a>');
    console.log(buttonUp);
  }else{
    response.send(`${request.body.login} `+'-- '+her+'\n <a href="/new/login">to return3</a>');
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
  // connection.end(err=>{
  //   if(err){
  //     return err;
  //     console.log('err');
  //   }else{
  //     console.log('database--- closed');
  //   }
  // });
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
const sql = `SELECT * FROM article`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results[1]['title']);
for(let oj=0;oj<results.length;oj++){
  app.use("/"+`${pathS}`+"/"+`${results[oj]['url']}`, function(request, response){
    response.render('index', {
      title: `${results[oj]['title']}`,
      description: `${results[oj]['description']}`,
      article: `${results[oj]['text']}`,
      autor: `${results[oj]['autor']}`,
      url: `${results[oj]['url']}`,
      json: `${results[oj]['JSON']}`,
      id: `${results[oj]['id']}`
    });
  });
}//for

});//connection
// connection.end(err=>{
//   if(err){
//     return err;
//     console.log('err');
//   }else{
//     console.log('database--- closed');
//   }
// });//closed-connection

app.get("/"+`${pathS}`+"/Amir", function (request, response) {
    response.render("page",{
      title: 'title',
      email: 'email',
      text: 'text',
      emailsVisible: true,
      emails: ['nasoberu@nasobe.ru', 'chikchicly@gmail.com'],
      phone: '+79528885656'
    });
    console.log('index');
});//Важная страница! IMPORTANT

app.get("/"+`${pathS}`+"/", function(request, response){
    response.sendFile(__dirname + "/site/index.html");
});
app.get("/"+`${pathS}`+"/contact", function(request, response){
    response.sendFile(__dirname + "/site/contact.html");
});


// app.use("/"+`${pathS}`+"/kontakt", function(request, response){
//   response.render('contact', {
//       title: 'Мои контакты',
//       name: 'Amir',
//       emailsVisible: true,
//       emails: ['nasoberu@nasobe.ru', 'chikchicy@gmail.com'],
//       phone: '+79528885656',
//     })
// });
// app.post("/new/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
app.use("/"+`${pathS}`+"/about", function(request, response){
    response.render('about', {
      title: ['about','ok'],
      titleVisible: true,
      article: ['Если углубляться в дебри, то выходит что нода работает на бесплатном сервере ubuntu, самые гениальные умы из гугла и возможно даже немножечко инопланетяни, создавали супер быстрый и маневренный движок V8 который заложен в ноде. Все известные, широко распространенные фреймворки: ангуляр, реакт, вью. Работают на nodejs. Nodejs расширена многими библиотеками и постоянно совершенствуется. Поэтому с нодой можно переписать криво написанный движок с php подключенный с mysql and phpmyadmin. И выглядеть он будет шикарно, маневренно и безупречно. Никто даже и подумать не вздумает что этот блог написан полноценным двоечником, зепеэрошником с хроническим алкоголизмом и серьезными смеходзилическими приступами(которые не поддаются лечению).  🤔','Всегда требуются высококвалифицированные программисты, готовые вступить в сообщество веб мастерской имени барона сайтоверстаузена и сделать этот мир чуточку лучше!'],
      backstory: 'Это настоящая веб мастерская имени барона сайтоверстаузена, цель этой компании “работающей по лицензии с гитхаба” как некоммерческая организация и вообще это портфолио и полная инструкция с детальным описанием как зарабатывать в национал социалистическом концлагере, и получать материальное вознаграждение, перекрывающие штрафы за незаконную трудовую деятельность и вообще найти способ чтобы трудовая деятельность была законной и оплачиваемой.',
      name: "namE"
    });
});
// app.get("/new/about", function(request, response){
//     response.sendFile(__dirname + "/site/about.html");
// });

// app.get("/"+`${pathS}`+"/contact", function(request, response){
//
//     response.sendFile(__dirname + "/site/contact.html");
// });

let okcap = "SELECT * FROM `article`";
connection.query(okcap, function(err, result) {
    if(err) console.log(err);

  for(let oj=0;oj<=result.length;oj++){
    // console.log(result[oj]['title']);
  // console.log(rows.title);
    // console.log(rows['title'][oj]);
  // }
      app.use("/"+`${pathS}`+"/list", function(request, response){
        response.render('list', {
          // title: [`${result[0]['title']}`,`${result[1]['title']}`,`${result[2]['title']}`,`${result[3]['title']}`],
          // description: [`${result[0]['description']}`,`${result[1]['description']}`,`${result[2]['description']}`,`${result[3]['description']}`],
          // url: [`${result[0]['url']}`,`${result[1]['url']}`,`${result[2]['url']}`,`${result[3]['url']}`],
          // result: [`${result[0]['url']}`,`${result[1]['url']}`,`${result[2]['url']}`,`${result[3]['url']}`,]
          title: [`${result[0]['title']}`,`${result[1]['title']}`,`${result[2]['title']}`,`${result[3]['title']}`,`${result[4]['title']}`,`${result[5]['title']}`,`${result[6]['title']}`,`${result[7]['title']}`,`${result[8]['title']}`,`${result[9]['title']}`,`${result[10]['title']}`,`${result[11]['title']}`,`${result[12]['title']}`,`${result[13]['title']}`,`${result[14]['title']}`,`${result[15]['title']}`,`${result[16]['title']}`,`${result[17]['title']}`,`${result[18]['title']}`,`${result[19]['title']}`,`${result[20]['title']}`,`${result[21]['title']}`,`${result[22]['title']}`,`${result[23]['title']}`,`${result[24]['title']}`,`${result[25]['title']}`,`${result[26]['title']}`,`${result[27]['title']}`,`${result[28]['title']}`,`${result[29]['title']}`,`${result[30]['title']}`,`${result[31]['title']}`,`${result[32]['title']}`,`${result[33]['title']}`,`${result[34]['title']}`,`${result[35]['title']}`,`${result[36]['title']}`,`${result[37]['title']}`,`${result[38]['title']}`,`${result[39]['title']}`,`${result[40]['title']}`,`${result[41]['title']}`,`${result[42]['title']}`,`${result[43]['title']}`,`${result[44]['title']}`,`${result[45]['title']}`,`${result[46]['title']}`,`${result[47]['title']}`,`${result[48]['title']}`,`${result[49]['title']}`,`${result[50]['title']}`,`${result[51]['title']}`,`${result[52]['title']}`,`${result[53]['title']}`,`${result[54]['title']}`,`${result[55]['title']}`,`${result[56]['title']}`,`${result[57]['title']}`,`${result[58]['title']}`,`${result[59]['title']}`,`${result[60]['title']}`,`${result[61]['title']}`,`${result[62]['title']}`],
          description: [`${result[0]['description']}`,`${result[1]['description']}`,`${result[2]['description']}`, `${result[3]['description']}`,
          `${result[4]['description']}`,`${result[5]['description']}`,`${result[6]['description']}`,`${result[7]['description']}`,`${result[8]['description']}`,`${result[9]['description']}`,`${result[10]['description']}`,`${result[11]['description']}`,`${result[12]['description']}`,`${result[13]['description']}`,`${result[14]['description']}`,`${result[15]['description']}`,`${result[16]['description']}`,`${result[17]['description']}`,`${result[18]['description']}`,`${result[19]['description']}`,`${result[20]['description']}`,`${result[21]['description']}`,`${result[22]['description']}`,`${result[23]['description']}`,`${result[24]['description']}`,`${result[25]['description']}`,`${result[26]['description']}`,`${result[27]['description']}`,`${result[28]['description']}`,`${result[29]['description']}`,`${result[30]['description']}`,`${result[31]['description']}`,`${result[32]['description']}`,`${result[33]['description']}`,`${result[34]['description']}`,`${result[35]['description']}`,`${result[36]['description']}`,`${result[37]['description']}`,`${result[38]['description']}`,`${result[39]['description']}`,`${result[40]['description']}`,`${result[41]['description']}`,`${result[42]['description']}`,`${result[43]['description']}`,`${result[44]['description']}`,`${result[45]['description']}`,`${result[46]['description']}`,`${result[47]['description']}`,`${result[48]['description']}`,`${result[49]['description']}`,`${result[50]['description']}`,`${result[51]['description']}`,`${result[52]['description']}`,`${result[53]['description']}`,`${result[54]['description']}`,`${result[55]['description']}`,`${result[56]['description']}`,`${result[57]['description']}`,`${result[58]['description']}`,`${result[59]['description']}`,`${result[60]['description']}`,`${result[61]['description']}`,`${result[62]['description']}`],
          url: [`${result[0]['url']}`,`${result[1]['url']}`,`${result[2]['url']}`,`${result[3]['url']}`,`${result[4]['url']}`,`${result[5]['url']}`,`${result[6]['url']}`,`${result[7]['url']}`,`${result[8]['url']}`,`${result[9]['url']}`,`${result[10]['url']}`,`${result[11]['url']}`,`${result[12]['url']}`,`${result[13]['url']}`,`${result[14]['url']}`,`${result[15]['url']}`,`${result[16]['url']}`,`${result[17]['url']}`,`${result[18]['url']}`,`${result[19]['url']}`,`${result[20]['url']}`,`${result[21]['url']}`,`${result[22]['url']}`,`${result[23]['url']}`,`${result[24]['url']}`,`${result[25]['url']}`,`${result[26]['url']}`,`${result[27]['url']}`,`${result[28]['url']}`,`${result[29]['url']}`,`${result[30]['url']}`,`${result[31]['url']}`,`${result[32]['url']}`,`${result[33]['url']}`,`${result[34]['url']}`,`${result[35]['url']}`,`${result[36]['url']}`,`${result[37]['url']}`,`${result[38]['url']}`,`${result[39]['url']}`,`${result[40]['url']}`,`${result[41]['url']}`,`${result[42]['url']}`,`${result[43]['url']}`,`${result[44]['url']}`,`${result[45]['url']}`,`${result[46]['url']}`,`${result[47]['url']}`,`${result[48]['url']}`,`${result[49]['url']}`,`${result[50]['url']}`,`${result[51]['url']}`,`${result[52]['url']}`,`${result[53]['url']}`,`${result[54]['url']}`,`${result[55]['url']}`,`${result[56]['url']}`,`${result[57]['url']}`,`${result[58]['url']}`,`${result[59]['url']}`,`${result[60]['url']}`,`${result[61]['url']}`,`${result[62]['url']}`],
          json: `${result[oj]['JSON']}`,
          result: [`${result}`]
        });
      });
};//for
      connection.end(err=>{
        if(err){
          return err;
          console.log('err');
        }else{
          console.log('database--- closed');
        }
      });

    })//connerction
  // }//for
  app.listen(port);
