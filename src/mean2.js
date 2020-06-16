// an array of numbers ignoring NaN
const arr1 = [1, NaN, 3, 4, 5, 6, NaN];

// using for loop for addition
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  if (isNaN(arr1[i])) continue;
  else sum += arr1[i];
}
console.log(sum);

// using for loop for multiplication
let product = 1;
let elementsWithNumberLength = arr1.length;
for (let i = 0; i < arr1.length; i++) {
  if (isNaN(arr1[i])) {
    elementsWithNumberLength--;
    continue;
  } else product *= arr1[i];
}
console.log(product);

console.log(`mean = ${sum / elementsWithNumberLength}`);
