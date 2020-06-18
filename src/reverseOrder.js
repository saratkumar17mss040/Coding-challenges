const arr = [1, '1', 23, 4, 5, 6, 's', 'm'];

// Array.reverse() method
console.log(arr.reverse());

const reverseArray = [];

// using forEach method
let lengthOftheArray = arr.length - 1;
arr.forEach((element, index, array) => {
  if (array.length === 0) return reverseArray;
  else reverseArray.push(array[lengthOftheArray]);
  lengthOftheArray--;
});

console.log(reverseArray);

const reverseArray2 = [];

// using simple for loop
for (let i = reverseArray.length - 1; i >= 0; i--) {
  reverseArray2.push(reverseArray[i]);
}

console.log(reverseArray2);
