// object
const object1 = {
  0: [1, 2, 3],
  1: [4, 5, 6],
  2: [7, 8, 9],
};

// object
const object2 = {
  0: [10, 11, 12],
  1: [13, 14, 15],
  2: [16, 17, 18],
};

// logging the type
console.log(typeof object1);
console.log(typeof object2);

const arr2 = Object.values(object2);
const arr1 = Object.values(object1);

console.log(((Object.getPrototypeOf(arr1))
    === Array.prototype) ? 'Array' : 'Not an array');
console.log(((Object.getPrototypeOf(arr2))
    === Array.prototype) ? 'Array' : 'Not an array');

console.log(arr1);
console.log(arr2);
