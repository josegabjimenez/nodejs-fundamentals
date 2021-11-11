const hello = async (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Hello there ${name}!`);
			resolve();
		}, 1000);
	});
};

const talk = async (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Blah blah blah blah...');
			resolve();
		}, 500);
	});
};

const bye = async (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Good to see you ${name}!`);
			resolve();
		}, 1000);
	});
};

const conversation = async (name) => {
	await hello(name);
	await talk();
	await talk();
	await talk();
	await talk();
	await bye(name);
	console.log('Ending process...');
};

console.log('Starting process...');
conversation('Josito');
