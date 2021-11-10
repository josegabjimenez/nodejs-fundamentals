const hello = (name, callback) => {
	setTimeout(() => {
		console.log(`Hello there ${name}!`);
		callback(name);
	}, 1000);
};

const bye = (name, callback) => {
	setTimeout(() => {
		console.log(`Good to see you ${name}!`);
		callback();
	}, 5000);
};

console.log('Starting process...');

hello('Josito', (name) => {
	bye(name, () => {
		console.log('Ending process...');
	});
});
