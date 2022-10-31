var http = require('http');
var static = require('node-static');

var path = new static.Server(`${__dirname}/localhost`)

http.createServer( (req,res) => {
	req.addListener('end', () => {
		path.serve(req, res);
	}).resume
}).listen(8080)

console.log('Criado!')