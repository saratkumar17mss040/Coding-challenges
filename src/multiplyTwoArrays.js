// an arrays of numbers
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [];

// multiply function
const multiply = (array1, array2) => {
  array1.forEach((element, index) => {
    return array3.push(element * array2[index]);
  });
};

multiply(array1, array2);
console.log(array3);
console.log(array3.length);
