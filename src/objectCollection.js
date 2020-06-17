// main Object
const object = {
  names: {
    name1: 'sam',
    name2: 'a',
    name3: 'b',
  },

  rollno: {
    1: 1,
    2: 2,
    3: 3,
  },

  subjectMarks: {
    1: [70, 80, 75],
    2: [87, 67, 90],
    3: [90, 65, 78],
  },

  result: {
    1: true,
    2: true,
    3: true,
  },
};

console.log('Student details');
console.log('Names');
console.log(object.names);
console.log('Rollno');
console.log(object.rollno);
console.log('Marks');
console.log(object.subjectMarks);
console.log('Result');
// Result true -> pass, false -> fail
console.log(object.result);
