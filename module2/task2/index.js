/*
Экспресс сервер, который читает содержимое файла и
возвращает его
*/
const express = require('express');
const fs = require('fs');
const app = express();


const port = 3000;
app.listen(port);
app.all('/read', (req, res) => {
    fs.readFile('./fileToRead.txt', (error, data) => {
        res.end(`data from file - ${data}`);
    })
});