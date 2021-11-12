const fs = require('fs').promises;

const read = async (path) => {
	try {
		const data = await fs.readFile(path);
		console.log(data.toString());
	} catch (err) {
		console.error(err);
	}
};

const write = async (path, content) => {
	try {
		await fs.writeFile(path, content);
		console.log('File was successfully written.');
	} catch (err) {
		console.error(err);
	}
};

const deleteFile = async (path) => {
	try {
		await fs.unlink(path);
		console.log('File was successfully deleted.');
	} catch (err) {
		console.error(err);
	}
};

read(`${__dirname}/text.txt`);

// WRITE JOSE FIFTY TIMES
// let text = '';
// let i = 0;
// while (i < 50) {
// 	text += 'Jose\n';
// 	i++;
// }
// write(`${__dirname}/text${i}characters.txt`, text);

// deleteFile(`${__dirname}/text51characters.txt`);

const makeTable = (num, start, end) => {
	let table = '';
	for (let i = start; i < end; i++) {
		table += `${num} * ${i} = ${num * i}------------\n`;
	}
	write(`${__dirname}/table.txt`, table);
};

makeTable(7, 0, 20);
