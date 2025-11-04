const express = require("express");
const http = require("http");

const app = express();

app.get('/',(req,res)=>{
    res.send("this is home page of express");
})

app.get('/manoj',(req,res)=>{
    res.send(`Hello ${req.query.name} `);
})

app.listen(8000,()=>{
    console.log("server is listening on port 8000");
})