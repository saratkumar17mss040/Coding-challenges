// 30.Write a javaScript program to extract 3rd and 5th rows with 1st and 3rd columns from a given 2D Array - extractElements.js

// 2D Array
const arr = [
  [1, 2, 3, 4, 5],
  [4, 5, 6, 7, 8],
  [9, 1, 0, 11, 12],
  [13, 1, 5, 6, 7],
  [17, 6, 7, 812, 4],
];

// function findElement
// @return Array
const findElement = () => {
  const desiredElement = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i].length;
    for (let j = 0; j < currentArr; j++) {
      if ((i === 2 && j === 0) || (i === 4 && j === 2))
        desiredElement.push(arr[i][j]);
    }
  }
  return desiredElement;
};

console.log(findElement());
