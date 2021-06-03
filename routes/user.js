const express = require("express");
const Router = express.Router();
const mysqlConnection = require('../connection.js');

// fetch the data from table
Router.get("/",(req,res)=>{
  mysqlConnection.query("SELECT * from user",(err,rows,fields)=>{
    if(!err){
      res.send(rows);
    }
    else{
      console.log(err);
    }
  });
});

// insert a new user
Router.post("/",(req,res)=>{
  let usr = req.body;
  var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?; CALL insertuser(@id,@first_name,@last_name);";
  mysqlConnection.query(sql,[usr.id, usr.first_name, usr.last_name],(err,rows,fields)=>{
    if(!err){
      res.send("User inserted succesfully");
    }
    else{
      console.log(err);
    }
  });
});


//Update  user

Router.put("/",(req,res)=>{
  let usr = req.body;
  var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?; CALL updateuser(@id,@first_name,@last_name);";
  mysqlConnection.query(sql,[usr.id, usr.first_name, usr.last_name],(err,rows,fields)=>{
    if(!err){
      res.send("User Updated succesfully");
    }
    else{
      console.log(err);
    }
  });
});

Router.delete("/:id",(req,res)=>{
  mysqlConnection.query("DELETE from user WHERE id=?",[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.send("Deleted succesfully!!");
    }
    else{
      console.log(err);
    }
  });
});

module.exports = Router;
