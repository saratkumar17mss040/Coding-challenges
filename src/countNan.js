// 2D Array
const arr = [
  [1, NaN, 3, 4],
  [NaN, 5, 6, 7],
  [8, 9, 1, 0, NaN],
];

// function countNan
// @param Array
// @return number
const countNan = (arr) => {
  let noOfNan = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isNaN(arr[i][j])) noOfNan++;
    }
  }
  return noOfNan;
};

console.log(countNan(arr));
