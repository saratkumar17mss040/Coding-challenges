// 2D Array
let arr1 = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9, 10],
];

// 2D Array
let arr2 = [
  [1, 78, 6, 23, 77],
  [8, 4, 628, -0, 55],
];

// function flatten
// @param Array
// @return flattenArray
const flatten = (arr) => {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(flatten) : flat;
};

arr1 = flatten(arr1);
arr2 = flatten(arr2);
console.log(arr1);
console.log(arr2);

// set Objects
let set1 = new Set(arr1);
let set2 = new Set(arr2);
let set3 = new Set();

for (let element of set1) {
  if (set2.has(element)) set3.add(element);
}

console.log('Common elements are', [...set3]);
