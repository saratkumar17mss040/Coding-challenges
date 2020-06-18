// matrix - 2D Array
const twodArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

// Multidimensional Array
const multiDimensionalArray = [
  [1, 2, [3, 45, [6], [8, 9, 10]]],
  [12, [34], [77, 66], 102, [77]],
  [[[[1112, 5556]]]],
];

// function flatten - recursive solution
// @param - Array
// @return - Array
const flatten = arr => {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(arr) : flat;
};

console.log('Before flattening the array');
console.log(twodArray);
console.log('After flattening the array');
console.log(flatten(twodArray));

console.log('Before flattening the multidimensional array');
console.log(multiDimensionalArray);

console.log('After flattening the multidimensional array');
console.log(multiDimensionalArray.flat(Infinity));
