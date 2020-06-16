// two array of numbers
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [9, 2, 4, 5, 8, 5, 6, 1, 1, 0];

// function findIntersect
function findIntersect(arr1, arr2) {
  // using set objects
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let commonElements = [];

  for (let element of set1) {
    if (set2.has(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
}

console.log(`Common elements are: `, findIntersect(arr1, arr2));
