const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "sar0j.devi",
  database : "jugnoo",
  multipleStatements : true
});

mysqlConnection.connect((err) => {
  if(!err){
    console.log("Connected!!");

  }
  else{
    console.log("Connetion Failed!!");
  }
});
module.exports = mysqlConnection;
