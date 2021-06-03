const mysql = require("mysql");

const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require('./routes/user.js');

var app = new express();
app.use(bodyParser.json());

app.use("/users",userRoutes);


app.listen(3000);
