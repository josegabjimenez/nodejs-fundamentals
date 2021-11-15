const itBrokes = (cb) => {
	setTimeout(() => {
		try {
			x + 90 + y;
			console.log('Papuh');
		} catch (err) {
			cb(err);
		}
	}, 0);
};

try {
	itBrokes((err) => {
		console.log(err.message);
	});
} catch (err) {
	console.error(err.message);
}

console.log('The program is still running');
