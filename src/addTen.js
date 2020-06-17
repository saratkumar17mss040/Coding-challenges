// Main Object with arrays
const object = {
  0: [0, 10, 20, 30, 40],
  1: [6, 7, 8, 9, 10],
  2: [11, 12, 13, 14, 15],
};

// function addTenToArray
// @param Main Object , numberOfProperties in which we
// would like to add 10 for each element in the array
// @return Main Object
const addTenToArray = (object, numberOfProps) => {
  let currentObjectValues = Object.values(object);
  for (let i = 0; i < numberOfProps; i++) {
    for (let j = 0; j < currentObjectValues[0].length; j++) {
      currentObjectValues[i][j] += 10;
    }
  }
  return object;
};

// adding 10 to each element present in the first array in the object
console.log(addTenToArray(object, 1));

// adding 10 to each element for the first two arrays in the object
console.log(addTenToArray(object, 2));
