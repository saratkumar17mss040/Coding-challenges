const array = [1, 2, 's', 'b', 's', 'iws'];

// function findCount
function findCount(element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) count++;
    else continue;
  }
  return count;
}

console.log(findCount('s'));
