const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');


//Порт и пути для работы на всех машинах.
const pathS='blozhik';
const port=3004;

const hosT='localhost';
const logiN='chikchicly';
const databasE='nasoberu_nasite';
const passworD='password';

// debian-sys-maint',
// database: 'nasoberu_nasite',
// password: 'vmHrqP8Ixuf0fDGt
// new Password
// ]!fzWSRx4z6H.J.e

console.log(__dirname);


app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');
const UrlencodedParser = express.urlencoded({extended: false});


app.use("/"+`${pathS}`+"/about", function(request, response){
  response.render('about', {
    title: ['about','ok'],
    titleVisible: true,
    article: ['Если углубляться в дебри, то выходит что нода работает на бесплатном сервере ubuntu, самые гениальные умы из гугла и возможно даже немножечко инопланетяни, создавали супер быстрый и маневренный движок V8 который заложен в ноде. Все известные, широко распространенные фреймворки: ангуляр, реакт, вью. Работают c nodejs. Nodejs расширена многими библиотеками и постоянно совершенствуется. Поэтому с нодой можно переписать криво написанный движок с php подключенный с mysql and phpmyadmin. И выглядеть он будет шикарно, маневренно и безупречно. Никто даже и подумать не вздумает что этот блог написан полноценным двоечником, зепеэрошником с хроническим алкоголизмом и серьезными смеходзилическими приступами(которые не поддаются лечению).  🤔','Всегда требуются высококвалифицированные программисты, готовые вступить в сообщество веб мастерской имени барона сайтоверстаузена и сделать этот мир чуточку лучше!'],
    backstory: 'Это настоящая веб мастерская имени "барона сайтоверстаузена", цель этой компании “работающей по лицензии с гитхаба” как некоммерческая организация и вообще это портфолио и полная инструкция с детальным описанием как зарабатывать в национал социалистическом концлагере, и получать материальное вознаграждение, перекрывающие штрафы за незаконную трудовую деятельность и найти способ чтобы трудовая деятельность была законной и оплачиваемой.',
    name: "namE"
  });
});

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
//     console.log(results[1]['title']);
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

//REQUIRE-REQUEST FILE-----------------------

// let data=JSON.stringify(dat);
// fs.readFileSync('title.json', data);
// let titleJSONparse=JSON.parse(titleJSON);
// console.log(titleJSONparse);
// console.log(titleJSON);
let okcap = "SELECT * FROM `article`";
connection.query(okcap, function(err, result) {
    if(err) console.log(err);
// console.log(result['title']);

  for(let oj=0;oj<result.length;oj++){

    // if(result.length>)
    fs.stat("title.json",(err,stats)=>{
      if(err){
        //result[`${oj}`]['title']
        let data = JSON.stringify(result[`${oj}`]['title']);
        fs.appendFileSync('title.json', data+',');
        console.log(err);
      }else{
        // let req=require('./title.json');
        // console.log(req);
      }
    })
  }//for
  console.log('YesFile'+' -'+ 'req' );
  let jsonData= fs.readFileSync('title.json','utf8');
  // let onK=JSON.parse(jsonData);
  console.log(jsonData+ " _ "+'onK[7]');
    // console.log(data);
    // fs.readFile('title.json', "utf-8", function(error,dta){
    //   if(error)throw error;
    // });
    // let fileContent = fs.readFileSync('title.json', "utf8");
    // const jsonText = JSON.parse(fileContent);
    // // console.log(jsonText.length);
    // for(let k=0;k<jsonText.length;k++){
    //   console.log(jsonText[k].title);
    //   const okidoki= jsonText[k].title;
    //   console.log(okidoki);
    // }
    // console.log(result[1].id+"_"+titleJSONparse.title);
    // console.log(result[oj]['title']);
    // console.log(rows.title);
    // console.log(rows['title'][oj]);
    // }
      app.use("/"+`${pathS}`+"/", function(request, response){
        response.render('list', {

          title: [`${result[0]['title']}`,`${result[1]['title']}`,`${result[2]['title']}`,`${result[3]['title']}`,`${result[4]['title']}`,`${result[5]['title']}`,`${result[6]['title']}`,`${result[7]['title']}`,`${result[8]['title']}`,`${result[9]['title']}`,`${result[10]['title']}`,`${result[11]['title']}`,`${result[12]['title']}`,`${result[13]['title']}`,`${result[14]['title']}`,`${result[15]['title']}`,`${result[16]['title']}`,`${result[17]['title']}`,`${result[18]['title']}`,`${result[19]['title']}`,`${result[20]['title']}`,`${result[21]['title']}`,`${result[22]['title']}`,`${result[23]['title']}`,`${result[24]['title']}`,`${result[25]['title']}`,`${result[26]['title']}`,`${result[27]['title']}`,`${result[28]['title']}`,`${result[29]['title']}`,`${result[30]['title']}`,`${result[31]['title']}`,`${result[32]['title']}`,`${result[33]['title']}`,`${result[34]['title']}`,`${result[35]['title']}`,`${result[36]['title']}`,`${result[37]['title']}`,`${result[38]['title']}`,`${result[39]['title']}`,`${result[40]['title']}`,`${result[41]['title']}`,`${result[42]['title']}`,`${result[43]['title']}`,`${result[44]['title']}`,`${result[45]['title']}`,`${result[46]['title']}`,`${result[47]['title']}`,`${result[48]['title']}`,`${result[49]['title']}`,`${result[50]['title']}`,`${result[51]['title']}`,`${result[52]['title']}`,`${result[53]['title']}`,`${result[54]['title']}`,`${result[55]['title']}`,`${result[56]['title']}`,`${result[57]['title']}`,`${result[58]['title']}`,`${result[59]['title']}`,`${result[60]['title']}`,`${result[61]['title']}`,`${result[62]['title']}`],
          description: [`${result[0]['description']}`,`${result[1]['description']}`,`${result[2]['description']}`, `${result[3]['description']}`,
          `${result[4]['description']}`,`${result[5]['description']}`,`${result[6]['description']}`,`${result[7]['description']}`,`${result[8]['description']}`,`${result[9]['description']}`,`${result[10]['description']}`,`${result[11]['description']}`,`${result[12]['description']}`,`${result[13]['description']}`,`${result[14]['description']}`,`${result[15]['description']}`,`${result[16]['description']}`,`${result[17]['description']}`,`${result[18]['description']}`,`${result[19]['description']}`,`${result[20]['description']}`,`${result[21]['description']}`,`${result[22]['description']}`,`${result[23]['description']}`,`${result[24]['description']}`,`${result[25]['description']}`,`${result[26]['description']}`,`${result[27]['description']}`,`${result[28]['description']}`,`${result[29]['description']}`,`${result[30]['description']}`,`${result[31]['description']}`,`${result[32]['description']}`,`${result[33]['description']}`,`${result[34]['description']}`,`${result[35]['description']}`,`${result[36]['description']}`,`${result[37]['description']}`,`${result[38]['description']}`,`${result[39]['description']}`,`${result[40]['description']}`,`${result[41]['description']}`,`${result[42]['description']}`,`${result[43]['description']}`,`${result[44]['description']}`,`${result[45]['description']}`,`${result[46]['description']}`,`${result[47]['description']}`,`${result[48]['description']}`,`${result[49]['description']}`,`${result[50]['description']}`,`${result[51]['description']}`,`${result[52]['description']}`,`${result[53]['description']}`,`${result[54]['description']}`,`${result[55]['description']}`,`${result[56]['description']}`,`${result[57]['description']}`,`${result[58]['description']}`,`${result[59]['description']}`,`${result[60]['description']}`,`${result[61]['description']}`,`${result[62]['description']}`],
          url: [`${result[0]['url']}`,`${result[1]['url']}`,`${result[2]['url']}`,`${result[3]['url']}`,`${result[4]['url']}`,`${result[5]['url']}`,`${result[6]['url']}`,`${result[7]['url']}`,`${result[8]['url']}`,`${result[9]['url']}`,`${result[10]['url']}`,`${result[11]['url']}`,`${result[12]['url']}`,`${result[13]['url']}`,`${result[14]['url']}`,`${result[15]['url']}`,`${result[16]['url']}`,`${result[17]['url']}`,`${result[18]['url']}`,`${result[19]['url']}`,`${result[20]['url']}`,`${result[21]['url']}`,`${result[22]['url']}`,`${result[23]['url']}`,`${result[24]['url']}`,`${result[25]['url']}`,`${result[26]['url']}`,`${result[27]['url']}`,`${result[28]['url']}`,`${result[29]['url']}`,`${result[30]['url']}`,`${result[31]['url']}`,`${result[32]['url']}`,`${result[33]['url']}`,`${result[34]['url']}`,`${result[35]['url']}`,`${result[36]['url']}`,`${result[37]['url']}`,`${result[38]['url']}`,`${result[39]['url']}`,`${result[40]['url']}`,`${result[41]['url']}`,`${result[42]['url']}`,`${result[43]['url']}`,`${result[44]['url']}`,`${result[45]['url']}`,`${result[46]['url']}`,`${result[47]['url']}`,`${result[48]['url']}`,`${result[49]['url']}`,`${result[50]['url']}`,`${result[51]['url']}`,`${result[52]['url']}`,`${result[53]['url']}`,`${result[54]['url']}`,`${result[55]['url']}`,`${result[56]['url']}`,`${result[57]['url']}`,`${result[58]['url']}`,`${result[59]['url']}`,`${result[60]['url']}`,`${result[61]['url']}`,`${result[62]['url']}`],
          result: [`${result.length}`]
        });
      });
// };//for
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
