

const http = require('http');

const server = http.createServer((req,res) => {

    res.writeHead(200, {'content-type':'text/plain'});

    res.end('hello world')});

server.listen(3000, () =>{

console.log('Servidor rodando na porta 3000');

});