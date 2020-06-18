// Main Object
let object = {
  0: 's',
  1: 155,
  2: 'g',
  3: 16.4,
};

// before null
console.log('Before assigning null');
console.log(object);

const objectLength = Object.keys(object).length;

// using simple for loop
for (let i = 0; i < objectLength; i++) {
  object[i] = null;
}

// after null
console.log('After assigning null');
console.log(object);

console.log('Simple one null ');
object = null;
console.log(object);
