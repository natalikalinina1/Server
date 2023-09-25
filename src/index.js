const http = require('http');
const getUsers = require ('./modules/users');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const query = url.searchParams;

    if (query.toString() !== '') {
        if (query.has('hello')) {
            const name = query.get('hello');
            if (name) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Hello, ${name}!`);
                return;
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Enter a name');
                return;
            }
        } else {
            res.writeHead(500);
            res.end();
            return;
        }
    }

    if (url.pathname === '/users') {
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(getUsers());
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(3003, () => {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003/');
});