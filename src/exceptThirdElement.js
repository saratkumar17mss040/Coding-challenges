// Main Object with arrays
const object = {
  0: [0, 1, 20, 3, 40],
  1: [6, 7, 8, 9, 10],
  2: [11, 1, 3, 14, 5],
};

// function exceptThirdElement
// @param Main Object, number, number
// @return Main Object
// Any property with any element can be removed not only third element
const exceptThirdElement = (object, prop, index) => {
  let currentPropertyValue = Object.values(object)[prop];
  currentPropertyValue.splice(index, 1);
  return object;
};

console.log('Before removing the element from the array in an object');
console.log(object);

const prop = 0;
const index = 2;

console.log('After removing the element from the array in an object');
console.log(exceptThirdElement(object, prop, index));
