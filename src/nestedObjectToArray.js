// object
const object = {
  name: 'Joker',
  age: 28,
  // nested object
  friends: {
    1: 'cheetah',
    2: 'braniac',
    3: 'buster',
  },
};

const arr = [];
arr.push(object.name);
arr.push(object.age);
arr.push([object.friends]);

console.log(arr);
