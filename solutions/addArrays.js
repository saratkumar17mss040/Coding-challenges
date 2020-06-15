// an array of numbers
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
let array3 = [];

// using simple for loop
for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
}

console.log(`sum of array1 and array2 is`,array3);
console.log(`length of final array is ${array3.length}`);

array3 = [];

// using forEach method
array1.forEach((element, index) => {
   return array3.push(element + array2[index]);
});

console.log(array3);
console.log(array3.length);


