const hello = (name, callback) => {
	setTimeout(() => {
		console.log(`Hello there ${name}!`);
		callback(name);
	}, 1000);
};

const talk = (callback) => {
	setTimeout(() => {
		console.log('Blah blah blah blah...');
		callback();
	}, 500);
};

const bye = (name, callback) => {
	setTimeout(() => {
		console.log(`Good to see you ${name}!`);
		callback();
	}, 1000);
};

console.log('Starting process...');

// Callback Hell Fix
const conversation = (name, times, callback) => {
	if (times > 0) {
		talk(() => {
			conversation(name, --times, callback);
		});
	} else {
		callback();
	}
};

hello('Josito', (name) => {
	conversation(name, 10, () => {
		bye(name, () => {
			console.log('Ending process...');
		});
	});
});
