const arr = [11, 12, 34, 56];
const arr2 = [14, 16, 17, 9];

// using every method
console.log(arr.every((ele) => ele > 10));

// function greaterOrNot
function greaterOrNot(arr) {
  // using simple for of loop
  let greaterOrNot = true;
  for (let element of arr) {
    if (element <= 10) {
      return !greaterOrNot;
    }
  }
  return greaterOrNot;
}

console.log(greaterOrNot(arr));
console.log(greaterOrNot(arr2));
