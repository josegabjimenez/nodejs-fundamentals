const hello = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Hello there ${name}!`);
			resolve(name);
		}, 1000);
	});
};

const talk = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Blah blah blah blah...');
			resolve(name);
		}, 500);
	});
};

const bye = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Good to see you ${name}!`);
			resolve(name);
		}, 1000);
	});
};

console.log('Starting process...');

hello('Pepito')
	.then(talk)
	.then(talk)
	.then(talk)
	.then(talk)
	.then(talk)
	.then(talk)
	.then(bye)
	.catch((err) => console.error(err));
