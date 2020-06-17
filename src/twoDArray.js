// function desiredArray generates n - number of arrays / dimensions
const desiredArray = (number) => {
  let arr;
  for (let i = 0; i < number; i++) {
    if (i == 0) arr = [];
    else arr.push([]);
  }
  return arr;
};

console.log(desiredArray(2));
console.log(desiredArray(4));
