const express = require("express");
// создаем объект приложения
const app = express();
const fs=require('fs');
const path =require('path');
const mysql=require('mysql2');
const bodyParser=require('body-parser');


//Порт и пути для работы на всех машинах.
const pathS='nodejs';
const port=3000;

const hosT='localhost';
const logiN='chikchicly';
const databasE='nasoberu_nasite';
const passworD='AfmxD!XnlST[r0B9';

// debian-sys-maint',
// database: 'nasoberu_nasite',
// password: 'vmHrqP8Ixuf0fDGt

console.log(__dirname);


app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');
const UrlencodedParser = express.urlencoded({extended: false});

app.use("/"+`${pathS}`+"/contact", function(request, response){
  response.render('contact', {
      title: 'Мои контакты',
      name: 'Amir',
      emailsVisible: true,
      emails: ['nasoberu@nasobe.ru', 'chikchicy@gmail.com'],
      phone: '+79528885656',
    })
});

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
    // Число постов больше в выборке бд, потому что изворачивался как мог.
    fs.stat('txt_json/new.json',(error)=>{
      if(error){
        console.log("file non");
        for(let oj=0;oj<result.length;oj++){
          //файлы для первой загрузки если удалить все
          let data = JSON.stringify(result[`${oj}`]['title']);
          fs.appendFileSync('txt_json/title.json', data+",");
          let dataDes = JSON.stringify(result[`${oj}`]['description']);
          fs.appendFileSync('txt_json/description.json', dataDes+",");
          let dataUrl = JSON.stringify(result[`${oj}`]['url']);
          fs.appendFileSync('txt_json/url.json', dataUrl+",");
        }//for
        return;
      }else{
        let readCout=fs.readFileSync('txt_json/new.json','utf8');
        let readJson=JSON.parse(readCout);
        console.log(readJson.title.length-1);
        console.log(result.length);

        if(result.length<readJson.title.length-1||result.length>readJson.title.length-1){
          fs.unlink('txt_json/description.json',err=>{
            if(err) throw err;
            console.log('File delet');
          });
          fs.unlink('txt_json/new.json',err=>{
            if(err) throw err;
            console.log('File delet');
            // Создание файлов в папку txt_json
            fs.stat("txt_json/title.json",(err,stats)=>{
              if(err){
                //result[`${oj}`]['title']
                for(let oj=0;oj<result.length;oj++){
                  // console.log(onK[oj].title+ " _ "+'onK['+oj+']');
                  // console.log(onK[oj]['description']+ " _ "+'onK['+oj+']');
                  let data = JSON.stringify(result[`${oj}`]['title']);
                  fs.appendFileSync('txt_json/title.json', data+",");
                }//for
                // console.log(data);
                console.log(err);
              }else{
                // let req=require('./title.json');
                // console.log(req);
                console.log('YesFile1'+' -'+ 'req' );
                // 'use strict';
                // let jsonData = require('./student.json');
                //             let jsonData= fs.readFileSync('title.json','utf8');
                //             let onK=JSON.parse(jsonData);
              }
            });

            fs.stat("txt_json/description.json",(err,stats)=>{
              if(err){
                //result[`${oj}`]['title']
                for(let oj=0;oj<result.length;oj++){
                  let dataDes = JSON.stringify(result[`${oj}`]['description']);
                  fs.appendFileSync('txt_json/description.json', dataDes+",");
                }//for
                console.log(err);
              }else{
                console.log('YesFile22222222'+' -'+ 'req' );
              }
            });
            fs.stat("txt_json/url.json",(err,stats)=>{
              if(err){
                for(let oj=0;oj<result.length;oj++){
                  let dataUrl = JSON.stringify(result[`${oj}`]['url']);
                  fs.appendFileSync('txt_json/url.json', dataUrl+",");
                }//for
                console.log(err);
              }else{
                console.log('Yes33333333333'+' -'+ 'req' );
              }
            });
          });
          fs.unlink('txt_json/newDescription.json',err=>{
            if(err) throw err;
            console.log('File delet');
          });
          fs.unlink('txt_json/newUrl.json',err=>{
            if(err) throw err;
            console.log('File delet');
          });
          fs.unlink('txt_json/title.json',err=>{
            if(err) throw err;
            console.log('File delet');
          });
          fs.unlink('txt_json/url.json',err=>{
            if(err) throw err;
            console.log('File delet');
          });
          console.log('unlink '+result.length+"_"+readJson.title.length);
        }
      }
    });


    setTimeout(()=>{ // выровнять порядок щоб небыло ошибок!
      //TITLE
      let fileContent = fs.readFileSync('txt_json/title.json', "utf8");
      let finalFantasy = fs.writeFileSync('txt_json/new.json', "{\n"+"\"title\":"+" ["+fileContent+"\" \""+" ]"+" \n}" );
      let writeFile=fs.readFileSync('txt_json/new.json',"utf8");
      let newTitle=JSON.parse(writeFile);

      //DESCRIPTION
      let fileContentDesc = fs.readFileSync('txt_json/description.json', "utf8");
      let finalFantasyDesc = fs.writeFileSync('txt_json/newDescription.json', "{\n"+"\"description\":"+" ["+fileContentDesc+"\" \""+" ]"+" \n}" );
      let writeFileDesc=fs.readFileSync('txt_json/newDescription.json',"utf8");
      let newDescription=JSON.parse(writeFileDesc);

      //URL
      let fileContentUrl = fs.readFileSync('txt_json/url.json', "utf8");
      let finalFantasyUrl = fs.writeFileSync('txt_json/newUrl.json', "{\n"+"\"url\":"+" ["+fileContentUrl+"\" \""+" ]"+" \n}" );
      let writeFileUrl=fs.readFileSync('txt_json/newUrl.json',"utf8");
      let newUrl=JSON.parse(writeFileUrl);

      console.log(newTitle.title.length+"_ Поста в странице.");
      app.use("/"+`${pathS}`+"/", function(request, response){
        response.render('list', {
          title: newTitle.title,
          description:newDescription.description,
          url:newUrl.url,
          result: [`${result.length}`]
        });
      });

    },100);
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


app.listen(port);
