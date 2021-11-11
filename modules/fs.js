const fs = require('fs');

// USING CALLBACKS
const read = (path, cb) => {
	fs.readFile(path, (err, data) => {
		if (err) {
			console.error(err);
		} else {
			cb(data.toString());
		}
	});
};

const write = (path, content, cb) => {
	fs.writeFile(path, content, (err) => {
		if (err) {
			console.error(err);
		} else {
			cb('Text file was created.');
		}
	});
};

const deleteFile = (path, cb) => {
	fs.unlink(path, cb);
};

read(`${__dirname}/text.txt`, (data) => {
	console.log(data);
});

write(`${__dirname}/text1.txt`, 'Re writing the text file', console.log);

deleteFile(`${__dirname}/text1.txt`, console.log);
