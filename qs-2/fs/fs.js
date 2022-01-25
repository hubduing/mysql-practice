const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('demo.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        return res.end();
    })
})
server.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000')
});