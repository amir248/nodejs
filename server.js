const express = require("express");
const app = express();
const mysql=require('mysql');
const path=require('path');


// const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'views')));


const connection = mysql.createConnection({

});
connection.connect(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- oK');
  }
});

let query = "SELECT * FROM `article`";
//----------------------------------------------
// ------------oprava--`_`----------------------
//----------------------------------------------

connection.query(query,(err,result,field)=>{
  for(let oj=0;oj<result.length;oj++){
    console.log(result[oj]['url']);
    // получение списка
    // app.get("/nodejs/"+result[oj]['url'], function(request, response){
      app.set('view engine', 'ejs')
      app.use("/nodejs/"+result[oj]['url'], function (request, response) {
      const connection = mysql.createConnection({
      
      });
      // response.send("hello world");

      connection.connect(err=>{
        if(err) throw err;
        console.log('database--- oK');
        // response.send('connection oK!');
      });

      let conbd = "SELECT * FROM `article`";
      connection.query(conbd,(err,result,field)=>{
        response.render('index', {
          title: `${result[oj]['title']}`,
          description: `${result[oj]['description']}`,
          article: `${result[oj]['text']}`,
          autor: `${result[oj]['autor']}`,
          url: `${result[oj]['url']}`,
          json: `${result[oj]['JSON']}`,
          id: `${result[oj]['id']}`
        })
      });

      app.use("/nodejs/list", function(request, response){
        response.render('list', {
          title: [`${result[0]['title']}`,`${result[1]['title']}`,`${result[2]['title']}`,`${result[3]['title']}`,`${result[4]['title']}`,`${result[5]['title']}`,`${result[6]['title']}`,`${result[7]['title']}`,`${result[8]['title']}`,`${result[9]['title']}`,`${result[10]['title']}`,`${result[11]['title']}`,`${result[12]['title']}`,`${result[13]['title']}`,`${result[14]['title']}`,`${result[15]['title']}`,`${result[16]['title']}`,`${result[17]['title']}`,`${result[18]['title']}`,`${result[19]['title']}`,`${result[20]['title']}`,`${result[21]['title']}`,`${result[22]['title']}`,`${result[23]['title']}`,`${result[24]['title']}`,`${result[25]['title']}`,`${result[26]['title']}`,`${result[27]['title']}`,`${result[28]['title']}`,`${result[29]['title']}`,`${result[30]['title']}`,`${result[31]['title']}`,`${result[32]['title']}`,`${result[33]['title']}`,`${result[34]['title']}`,`${result[35]['title']}`,`${result[36]['title']}`,`${result[37]['title']}`,`${result[38]['title']}`,`${result[39]['title']}`,`${result[40]['title']}`,`${result[41]['title']}`,`${result[42]['title']}`,`${result[43]['title']}`,`${result[44]['title']}`,`${result[45]['title']}`,`${result[46]['title']}`,`${result[47]['title']}`,`${result[48]['title']}`,`${result[49]['title']}`,`${result[50]['title']}`,`${result[51]['title']}`,`${result[52]['title']}`,`${result[53]['title']}`,`${result[54]['title']}`,`${result[55]['title']}`,`${result[56]['title']}`,`${result[57]['title']}`,`${result[58]['title']}`,`${result[59]['title']}`,`${result[60]['title']}`,`${result[61]['title']}`,`${result[62]['title']}`],
          description: [`${result[0]['description']}`,`${result[1]['description']}`,`${result[2]['description']}`, `${result[3]['description']}`,
          `${result[4]['description']}`,`${result[5]['description']}`,`${result[6]['description']}`,`${result[7]['description']}`,`${result[8]['description']}`,`${result[9]['description']}`,`${result[10]['description']}`,`${result[11]['description']}`,`${result[12]['description']}`,`${result[13]['description']}`,`${result[14]['description']}`,`${result[15]['description']}`,`${result[16]['description']}`,`${result[17]['description']}`,`${result[18]['description']}`,`${result[19]['description']}`,`${result[20]['description']}`,`${result[21]['description']}`,`${result[22]['description']}`,`${result[23]['description']}`,`${result[24]['description']}`,`${result[25]['description']}`,`${result[26]['description']}`,`${result[27]['description']}`,`${result[28]['description']}`,`${result[29]['description']}`,`${result[30]['description']}`,`${result[31]['description']}`,`${result[32]['description']}`,`${result[33]['description']}`,`${result[34]['description']}`,`${result[35]['description']}`,`${result[36]['description']}`,`${result[37]['description']}`,`${result[38]['description']}`,`${result[39]['description']}`,`${result[40]['description']}`,`${result[41]['description']}`,`${result[42]['description']}`,`${result[43]['description']}`,`${result[44]['description']}`,`${result[45]['description']}`,`${result[46]['description']}`,`${result[47]['description']}`,`${result[48]['description']}`,`${result[49]['description']}`,`${result[50]['description']}`,`${result[51]['description']}`,`${result[52]['description']}`,`${result[53]['description']}`,`${result[54]['description']}`,`${result[55]['description']}`,`${result[56]['description']}`,`${result[57]['description']}`,`${result[58]['description']}`,`${result[59]['description']}`,`${result[60]['description']}`,`${result[61]['description']}`,`${result[62]['description']}`],
          url: [`${result[0]['url']}`,`${result[1]['url']}`,`${result[2]['url']}`,`${result[3]['url']}`,`${result[4]['url']}`,`${result[5]['url']}`,`${result[6]['url']}`,`${result[7]['url']}`,`${result[8]['url']}`,`${result[9]['url']}`,`${result[10]['url']}`,`${result[11]['url']}`,`${result[12]['url']}`,`${result[13]['url']}`,`${result[14]['url']}`,`${result[15]['url']}`,`${result[16]['url']}`,`${result[17]['url']}`,`${result[18]['url']}`,`${result[19]['url']}`,`${result[20]['url']}`,`${result[21]['url']}`,`${result[22]['url']}`,`${result[23]['url']}`,`${result[24]['url']}`,`${result[25]['url']}`,`${result[26]['url']}`,`${result[27]['url']}`,`${result[28]['url']}`,`${result[29]['url']}`,`${result[30]['url']}`,`${result[31]['url']}`,`${result[32]['url']}`,`${result[33]['url']}`,`${result[34]['url']}`,`${result[35]['url']}`,`${result[36]['url']}`,`${result[37]['url']}`,`${result[38]['url']}`,`${result[39]['url']}`,`${result[40]['url']}`,`${result[41]['url']}`,`${result[42]['url']}`,`${result[43]['url']}`,`${result[44]['url']}`,`${result[45]['url']}`,`${result[46]['url']}`,`${result[47]['url']}`,`${result[48]['url']}`,`${result[49]['url']}`,`${result[50]['url']}`,`${result[51]['url']}`,`${result[52]['url']}`,`${result[53]['url']}`,`${result[54]['url']}`,`${result[55]['url']}`,`${result[56]['url']}`,`${result[57]['url']}`,`${result[58]['url']}`,`${result[59]['url']}`,`${result[60]['url']}`,`${result[61]['url']}`,`${result[62]['url']}`],
          json: `${result[oj]['JSON']}`,
          result: [`${result}`]
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

    })//app.use
    // });//posts
    // const linkList=result[oj]['url'];
  }//for
  // console.log(linkList);

  // const tablePost=result;
});
// console.log(tablePost);
connection.end(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- closed');
  }
});



// app.post("/nodejs/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });

app.set('view engine', 'ejs');
 
app.use("/nodejs/kontakt", function(request, response){
  response.render('contact', {
      title: 'Мои контакты',
      name: 'Amir',
      emailsVisible: true,
      emails: ['nasoberu@nasobe.ru', 'chikchicy@gmail.com'],
      phone: '+79528885656',
    })
});

app.use("/nodejs/about", function(request, response){
    response.render('about', {
      title: 'about',
  text: 'Настоящая веб мастерская имени барона сайтоверстаузена aand with a real super hero'
    });
});
app.get("/nodejs/", function(request, response){
    response.sendFile(__dirname + "/site/index.html");
});
app.get("/nodejs/contact", function(request, response){
    response.sendFile(__dirname + "/site/contact.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
