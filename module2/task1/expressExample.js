/*
Http сервер, который принимает запросы вида /name и
выдает Hello, name - Do using Express framework
*/

const express = require('express');
const app = express();
app.all('/:name',(req,res)=>{
    const {name} = req.params;
    res.end(`Hello, ${name}`)

});

app.listen(3001);