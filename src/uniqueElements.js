const notUniqueArray = [1, 2, 2, 34, 6, 7, 8, 6, 7, 4, 5, 6];

// using unique arrow function & set object
const unique = (notUniqueArray) => [...new Set(notUniqueArray)];
console.log('Unique elements in the array is', unique(notUniqueArray));
