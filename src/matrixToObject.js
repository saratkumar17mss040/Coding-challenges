// 2D Array
const arr = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
];

// function matrixToObject which converts every elements to Object values
// @param - Array
// @return Object
const matrixToObject = (arr) => {
  let object = {};
  let prop = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      object[prop] = arr[i][j];
      prop++;
    }
  }
  return object;
};

console.log(matrixToObject(arr));
