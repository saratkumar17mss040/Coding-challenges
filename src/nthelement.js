const arr = [1, 2, 'gowtham', ':(', ':)', 33.4];

// findNthElement arrow function
const findNthElement = index => arr[index - 1];

let position = 3;
console.log(`${position}rd element  in the array is ${findNthElement(3)}`);
