const array = [1, 2, 34, 56, 7, 1, 2, 3, 2, 4, 6, 3];

// function count
// @param - number,number,number
// @return - number
const count = (element, lowerBound, upperBound) => {
  let count = 0;
  for (let i = lowerBound - 1; i < upperBound; i++) {
    if (array[i] === element) count++;
  }
  return count;
};

const desiredSearchElement = 1;
const startRange = 1;
const endRange = 6;
const result = count(desiredSearchElement, startRange, endRange);

console.log(`Number of ${desiredSearchElement}'s in the given range 
occurs ${result} times`);
