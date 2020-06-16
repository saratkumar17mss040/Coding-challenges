// 2D Array
const arr = [
  [1, 2, 3, 4, 5],
  [NaN, 6, 7, 8, 9, 10],
  [14, 12, 45, 56, 10],
  [NaN, NaN, 77, 68],
];

// function replaceNan
// @param Array
// @return Array
function replaceNan(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isNaN(arr[i][j])) arr[i][j] = 3;
    }
  }
  return arr;
}

console.log(replaceNan(arr));
