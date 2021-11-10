let name = process.env.NAME || 'Without name';

console.log(`Hello ${name}!`);
console.log(process.env.NAME);

//SPLIT A STRING TO CONVERT IT INTO AN ARRAY
const arr = 'Pepito,Fulanito sin tales,mamon';
console.log(arr);

const list = arr.split(',');
console.log(list);
