const arr = [1, 2, [3, 4, [56, [6], 7, 8]]];

// recursive function getDimension
const getDimesion = arr => Array.isArray(arr) ? 1 + Math.max(...arr.map(getDimesion)) : 0;

console.log(`Dimension in the given array is ${getDimesion(arr)}`);

