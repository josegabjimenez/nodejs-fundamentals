const bcrypt = require('bcrypt');

const PASSWORD = 'PepitoYSutano123';
let encryptedPassword = '';

bcrypt.hash(PASSWORD, 5, (err, hash) => {
	if (err) return console.error(err);
	encryptedPassword = hash;
	console.log(encryptedPassword);
	bcrypt.compare('PepitoYSutano123', encryptedPassword, (err, isValid) => {
		if (err) return console.error(err);
		console.log(isValid);
	});
});
