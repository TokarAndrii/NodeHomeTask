const http = require('http');
http.createServer((req, res) => {
    const nameWithSlash = req.url;
    const name2 = nameWithSlash.substring(1,nameWithSlash.length);
    res.end(`Hello  ${name2}`);
}).listen(3000);