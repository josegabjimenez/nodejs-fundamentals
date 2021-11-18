const asyncFunction = (callback) => {
	setTimeout(() => {
		try {
			let a = alsfkjñlj;
			callback(null, a);
		} catch (err) {
			callback(err);
		}
	}, 3000);
};

asyncFunction((err, data) => {
	if (err) {
		console.error("There's an error.");
		console.error(err);
		return;
		// throw err // DOESN'T WORK
	}

	console.log('Everything is good');
	console.log(data);
});
