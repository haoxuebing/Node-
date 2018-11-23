let http = require('http'); 
http.createServer((req, res) =>  {
    res.write(`Request Method:  ${req.method}\n`)
    res.write(`Request URL: ${req.url}`); 
    res.end(); 
}).listen(3000); 
console.log('server start');
