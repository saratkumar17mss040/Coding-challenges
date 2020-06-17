// First Matrix
const arr1 = [
  [32, 43, 67],
  [44, 56, 78],
];

// Second Matrix
const arr2 = [
  [73, 17, 33],
  [45, 32, 12],
];

// function allOperations
// @param Array,String,Array
// @return Array
const allOperations = (arr1, operator, arr2) => {
  let result = [];
  result = new Array(arr1.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(arr1[i].length);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = Math.round(eval(arr1[i][j] + `${operator}` + arr2[i][j]));
    }
  }
  return result;
};

console.log('Basic matrix math operartions');
console.log('Addition of two matrix');
console.log(allOperations(arr1, '+', arr2));
console.log('Subtraction of two matrix');
console.log(allOperations(arr1, '-', arr2));
console.log('Multiplication of two matrix');
console.log(allOperations(arr1, '*', arr2));
console.log('Division of two matrix');
console.log(allOperations(arr1, '/', arr2));
