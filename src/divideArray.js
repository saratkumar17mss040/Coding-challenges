// an arrays of numbers
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [];

// divide function
const divide = (array1, array2) => {
  array1.forEach((element, index) => {
    return array3.push(element / array2[index]);
  });
};

divide(array1, array2);
console.log(array3);
console.log(array3.length);
