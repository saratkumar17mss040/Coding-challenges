// 2D Array
const arr = [
  [1, 2, 3, 4, 5],
  [4, 5, 6, 7, 8],
  [9, 1, 0, 11, 12],
  [13, 1, 5, 6, 7],
  [17, 6, 7, 812, 4],
];

// function retrieveElement
// @param number,number,number,number
// @return number
const retrieveElement = (
  rowIndex,
  columnIndex,
  retrieveColumn,
  retrieveRow
) => {
  const desiredElement = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i].length;
    for (let j = 0; j < currentArr; j++) {
      if (i === rowIndex && j === columnIndex) desiredElement.push(arr[i][j]);
      if (i === retrieveRow) desiredRow.push(arr[i][j]);
      if (j === retrieveColumn) desiredColumn.push(arr[i][j]);
    }
  }
  return desiredElement;
};

const rowIndex = 2;
const columnIndex = 1;
const retrieveColumnIndex = 4;
const retrieveRowIndex = 3;
const desiredColumn = [];
const desiredRow = [];
console.log(
  findElement(rowIndex, columnIndex, retrieveColumnIndex, retrieveRowIndex)
);
console.log(desiredRow);
console.log(desiredColumn);
