const mysql=require('mysql');
// конфигурация

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

connection.query(query,(err,result,field)=>{
  for(let oj=0;oj<63;oj++){
    console.log(result[oj]['title']);
  }
  // console.log(field);
})
connection.end(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- closed');
  }
});
