process.on('exit', () => {
	console.log('The process has finished');
});

process.on('beforeExit', () => {
	console.log('Leaving the process...');
});

process.on('uncaughtException', (err, origin) => {
	console.log("An error wasn't caught");
	console.log(err);
});
s;
console.log("If there's no error, then I can show this message");
