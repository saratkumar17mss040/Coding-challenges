// an array of numbers
const arr1 = [1, 2, 3, 4, 5, 6];

// using reduce method
const sum = arr1.reduce((sum, ele) => ele + sum, 0);
console.log(`sum = ${sum}`);

const product = arr1.reduce((product, ele) => ele * product, 1);
console.log(`product = ${product}`);

console.log(`mean = ${sum / arr1.length}`);
