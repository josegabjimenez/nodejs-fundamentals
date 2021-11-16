const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/test.txt');
readableStream.setEncoding('utf8');
readableStream.on('data', (chunk) => {
	data += chunk;
});

readableStream.on('end', () => {
	console.log('The readable stream has finished');
	console.log(data);
});

// stream de escritura:
// process.stdout.write('hola')
// process.stdout.write('mundo')

const Transform = stream.Transform;
function Mayus() {
	Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
	mayusText = chunk.toString().toUpperCase();
	this.push(mayusText);
	cb();
};
let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
