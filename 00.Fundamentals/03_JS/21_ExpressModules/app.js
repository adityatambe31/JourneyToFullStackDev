// express is package for node js for creating web application 
// it helps in URL passing and routing in node js

const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.send("This is my first time using the express module in node js");
})

app.get("/", (req, res)=>{
    res.send("This is the second pag of my first time using the express module in node js");
})

app.get("/", (req, res)=>{
    res.send("This is the third page of my first time using the express module in node js");
})
