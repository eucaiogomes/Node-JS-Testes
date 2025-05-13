const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Você fez uma requisição GET para a página inicial!');
    } else if (req.method === 'POST' && req.url === '/enviar') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Você fez uma requisição POST para /enviar!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
