// 2D Array
const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 1, 4, 5],
];

// function dropColumn
// @param number
const dropColumn = number => {
  for (let i = 1; i <= number; i++) arr.shift(arr[i]);
};

let numberOfColumnsToDrop = 2;
dropColumn(numberOfColumnsToDrop);
console.log(
  `After removing ${numberOfColumnsToDrop} columns the array is =`,
  arr
);
