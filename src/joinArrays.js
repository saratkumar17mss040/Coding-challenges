const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['🚀', '🤝', '😊', "these are emoji's"];
const arr3 = ['d', 'e', 'n', 'o'];

// join function joins all n - numbers of array in an array
function join() {
  let numberOfArguments = arguments.length;
  let finalArray = [];
  for (let i = 0; i < numberOfArguments; i++) {
    finalArray.push(arguments[i]);
  }
  return finalArray;
}

console.log(join(arr1, arr2, arr3));

// concatenating three arrays
console.log(arr1.concat(arr2).concat(arr3));
