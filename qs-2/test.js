var http = require('http');
var dt = require('./test-module-data');
const port = 3000
const host = '127.0.0.1'

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
})
server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});