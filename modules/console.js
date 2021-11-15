//TABLE
console.log('INFO');
console.error('Error');

const arr = [1, 2, 3, 4, 5];

const arr1 = [
	[1, 2, 3, 4],
	[10, 20, 2, 5],
	[2, 3, 4, ['Pollito', 'Leon']],
];

console.table(arr1);
console.log(arr1[2][3][1]);

//CONSOLE GROUP

// function fun1() {
// 	console.group('Starting function 1');
// 	console.log('Some processes...');
// 	console.log('We still on func1');
// 	fun2();
// 	console.log('Finished function 2');
// 	console.groupEnd('Starting function 1');
// }

// function fun2() {
// 	console.group('Starting function 2');
// 	console.log('Some processes...');
// 	console.log('We still on func2');
// 	console.log('Process over');
// 	console.groupEnd('Starting function 2');
// }

// fun1();
