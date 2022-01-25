const fs = require('fs');
const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = '.' + q.pathname;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('<h1>404 Not Found</h1>');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})
server.listen(8080);