var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 8080;

var server = http.createServer(function (req,res) {
	if (req.url == '/' ) {
		fs.readFile(__dirname + '/public/html/homepage.html', function(err,data) {
			res.writeHead(200, {'content-type': 'text/html'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/css/homepage.css') {
		fs.readFile(__dirname + '/public/css/homepage.css', function(err,data) {
			res.writeHead(200, {'content-type': 'text/css'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/js/homepage.js') {
		fs.readFile(__dirname + '/public/js/homepage.js', function(err,data) {
			res.writeHead(200, {'content-type': 'text/js'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/html/store.html') {
		fs.readFile(__dirname + '/public/html/store.html', function(err,data) {
			res.writeHead(200, {'content-type': 'text/html'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/css/store.css') {
		fs.readFile(__dirname + '/public/css/store.css', function(err,data) {
			res.writeHead(200, {'content-type': 'text/css'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/html/aboutus.html') {
		fs.readFile(__dirname + '/public/html/aboutus.html', function(err,data) {
			res.writeHead(200, {'content-type': 'text/html'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/css/aboutus.css') {
		fs.readFile(__dirname + '/public/css/aboutus.css', function(err,data) {
			res.writeHead(200, {'content-type': 'text/css'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/aboutus.png') {
		fs.readFile(__dirname + '/public/assets/aboutus.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/car-font.png') {
		fs.readFile(__dirname + '/public/assets/car-font.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/factory_worker.png') {
		fs.readFile(__dirname + '/public/assets/factory_worker.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/american-flag.png') {
		fs.readFile(__dirname + '/public/assets/american-flag.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/car-main.png') {
		fs.readFile(__dirname + '/public/assets/car-main.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	else if (req.url == '/public/assets/main2.png') {
		fs.readFile(__dirname + '/public/assets/main2.png', function(err,data) {
			res.writeHead(200, {'content-type': 'image/png'});
			res.write(data);
			res.end();
		})
	}
	
	else {
		res.end('not found');
	}
});

server.listen(port);
console.log(`working running on port ${port}`);
console.log(`Try using 127.0.0.1:${port} or localhost:${port}`);
