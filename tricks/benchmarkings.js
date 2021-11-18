// let suma1;
// let suma2;

// console.time('SUMA 1');
// for (let i = 0; i < 100000000; i++) {
// 	suma1++;
// }
// console.timeEnd('SUMA 1');

// console.time('SUMA 2');
// for (let j = 0; j < 100000000; j++) {
// 	suma2 = suma2 + j;
// }
// console.timeEnd('SUMA 2');

let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 10000000000; i++) {
	suma++;
}
console.timeEnd('Tiempo bucle');

console.time('Tiempo bucle 2');
for (let j = 0; j < 10000000000; j++) {
	suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2');
