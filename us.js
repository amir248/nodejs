const mysql = require("mysql2");
var fs = require("fs");

const connection = mysql.createConnection({
  host: "localhost",
  user: "debian-sys-maint",
  database: "nasoberu_nasite",
  password: "vmHrqP8Ixuf0fDGt"
});
 
// получение объектов
// connection.query("SELECT * FROM barbarians")
//           .then(result =>{
//
//             for(let oy=0;oy<result.length;oy++){
//
//               console.log(result[0][9]);
//                 // console.log(oy);
//
//                 //----------------------------------------------------
//               fs.writeFile('users.json', "Amir Shikaren",  function(err) {
//                 if (err) {
//                   return console.error(err);
//                 }
//                 fs.readFile('users.json', function (err, data) {
//                   if (err) {
//                     return console.error(err);
//                   }
//                   console.log("Asynchronous read: " + data.toString());
//                 });
//               });
// //------------------------------------
//
// }//for count
//
//           })
//           .catch(err =>{
//             console.log(err);
//           });

connection.query("SELECT * FROM barbarians",
  function(err, results, fields) {
//     console.log(err);
//     console.log(results[7]['login']); // собственно данные
//     console.log(fields); // мета-данные полей
  for(let oK=0;oK<results.length;oK++){
    console.log(results[oK]['login']);

    fs.writeFile('users.json', `${results[oK]['login']}`,  function(err) {
                   if (err) {
                     return console.error(err);
                   }
                   fs.readFile('users.json', function (err, data) {
                     if (err) {
                       return console.error(err);
                     }
                     console.log("Asynchronous read: " + data.toString());
                   });
                 });

    if(results[oK]['login']==='LOL'){
      console.log('name Taken <-----------------------------------XXX');
    }
  };
});




  console.log("Data written successfully!");
  console.log("Let's read newly written data");

  const app = express();
     
  // создаем парсер для данных application/x-www-form-urlencoded
  const urlencodedParser = express.urlencoded({extended: false});
    
  app.get("/", function (request, response) {
      response.sendFile(__dirname + "/test.html");
  });
  app.post("/", urlencodedParser, function (request, response) {
      if(!request.body) return response.sendStatus(400);
      console.log(request.body);
      response.send(`${request.body.userName} - ${request.body.userAge}`);
  });
     
  app.listen(3000, ()=>console.log("Сервер запущен..."));
