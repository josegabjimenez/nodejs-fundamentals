let buffer = Buffer.from([4, 10, 60, 1600]);

// console.log(buffer);

let abecedary = Buffer.alloc(26);
console.log(abecedary);

for (let i = 0; i < abecedary.length; i++) {
	abecedary[i] = i + 97;
}

console.log(abecedary);
console.log(abecedary.toString());
