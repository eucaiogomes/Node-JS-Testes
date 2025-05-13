const http = require('http');

const server = http.createServer((req, res) => {
    const responseObj = { message: "Olá, este é um JSON!" };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseObj));
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
