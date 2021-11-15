const { exec, spawn } = require('child_process');

// exec('cd modules/ && ls -al', (err, stdout, stderr) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}

// 	console.log(stdout);
// });

let childProcess = spawn('ls', ['-al']);

console.log(childProcess);
console.log(childProcess.pid);

childProcess.stdout.on('data', (data) => {
	console.log(data.toString());
});

childProcess.on('exit', () => {
	console.log(childProcess.killed);
});
