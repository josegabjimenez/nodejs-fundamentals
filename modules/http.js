const http = require('http');
const PORT = 3000;

const router = (req, res) => {
	console.log('A petition has been made!');
	const petition = req.url;

	switch (petition) {
		case '/hola':
			res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
			let saludo = hola();
			res.write(saludo);
			res.end();
			break;
		case '/hello':
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.write('Hellou da');
			res.end();
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.write('Error 404: Something went wrong :(');
			res.end();
			break;
	}
};

const hola = () => {
	return 'Hola krnal áeíoú, pepito perez es una ñ';
};

const server = http.createServer(router);
server.listen(PORT);

console.log('Listening on http://localhost:3000');
