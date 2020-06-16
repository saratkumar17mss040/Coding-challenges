// 2D Array
const arr = [
  [1, 3, 4, 5, 6],
  [3, 5, 6, 78, 9],
  [23, 4, 5, 6, 6],
];

// function changeColumn
// @param number
const changeColumn = (column) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < column; j++) {
      arr[i][j] = Math.round(Math.random() * 100);
    }
  }
};

changeColumn(2);
console.log(arr);
