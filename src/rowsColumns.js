// function generateRandomMatrix
// @param - number,number
// @retunn - Array
const generateRandomMatrix = (noOfRows, noOfColumns) => {
  let result = [];
  result = new Array(noOfRows);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(noOfColumns);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = Math.round(Math.random() * 100);
    }
  }
  return result;
};

const noOfRows = 5;
const noOfColumns = 2;

console.log('Generated random matrix');
console.log(generateRandomMatrix(noOfRows, noOfColumns));
