// 2D Array
const arr = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
];

// function rowsToObject
// @param - Array,number
// @return Object
const rowsToObject = (arr, noOfRows) => {
  const object = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < noOfRows; j++) {
      object[j] = arr[j];
    }
  }
  return object;
};

console.log(rowsToObject(arr, 3));
