const fs = require('fs').promises;

const read = async (path) => {
	try {
		const data = await fs.readFile(path);
		return data.toString();
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

const main = async () => {
	console.log(await read(`${__dirname}/text.txt`));
};

main();
