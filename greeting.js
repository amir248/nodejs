console.log("greeting module");
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
        // return console.log("gooting vecher");
    else if(hour > 10)
        return "Добрый день, " + name;
        // return console.log("gooten day");
    else
        return "Доброе утро, " + name;
        // return console.log("Dobroe ytro!");
}
