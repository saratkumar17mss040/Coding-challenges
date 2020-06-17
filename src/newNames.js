const object = {
  d: 1,
  e: 2,
  f: 3,
};

// console.log(Object.keys(object)[0]);

// destructuring object  - one way
const { a, b, c } = object;

console.log('Assigning values of d,e,f, to a,b,c');
console.log(a, b, c);

console.log('Before assigning new properties to the object');
console.log(object);

// replacing old property name with new names - a,b,c - second way
let keyLength = Object.keys(object).length;
let actualKeys = Object.keys(object);
let oldObjectValues = Object.values(object);

for (let i = 0; i < keyLength; i++) {
    let unicodeValue = 97;
    let newProperty = String.fromCharCode(unicodeValue);
    unicodeValue++;
    let oldProperty = actualKeys[i];
    object[newProperty] = object[oldProperty];
    delete object[oldProperty];
}
 
// for (let i = 0; i < keyLength; i++) {
//     for (let j = 97; j <= 122; j++) {
//         let firstLetter = String.fromCharCode(j);
//         let oldProperty = actualKeys[i];
//         object[firstLetter] = object[oldProperty];
//         delete object[oldProperty];
//         object[firstLetter] = 
//   }
// }

console.log('After assigning new properties to the object');
console.log(object);

// const ob = {
//   name: 'sam',
//   age: 22,
// };

// console.log(ob);
// ob.newName = ob.name;
// console.log(Object.keys(ob)[0]);
// delete ob.name;
// ob.newAge = ob.age;
// delete ob.age;
// console.log(ob);
