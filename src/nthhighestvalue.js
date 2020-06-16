let numbers = [9, 2, 4, 5, 8, 5, 6, 1, 1, 0];

// function nthHighest
function nthHighest(desiredHighest) {
  numbers = numbers.sort((a, b) => b - a);
  return `${desiredHighest}th highest element in the numbers array = 
  ${numbers[desiredHighest - 1]}`;
}

console.log(nthHighest(4));
