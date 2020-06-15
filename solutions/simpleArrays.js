// array of numbers
const numberArray = [1, 2, 3, 4, 5, 6];
// array of complex numbers in string 
const complexArray = ['2+3i', '3+3i', '4+4i', '5+5i', '6+6i', '4-6i'];
// an array of logical values
const logicalArray = [true, false, true, false, true, false];
// an array of characters
const characterArray = ['h', 'e', 'l', 'l', 'o', ':)'];

// addComplexNumber arrow function for adding complex numbers
// @param Array
// @return String - Not pure number!
// works only for simple complex numbers
const addComplexNumber = arr => {
  let realNum = 0,imgNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentComplexNumber = arr[i];
    realNum += Number(currentComplexNumber[0]);
    imgNum += Number(currentComplexNumber[2]);
    }
    return String(`${realNum} + ${imgNum}i`);
};

// log the outputs
console.log(`Addition of all complex number is ${addComplexNumber(complexArray)}`);
console.log(`Length of array of complex numbers are: ${complexArray.length}`);
console.log(numberArray,numberArray.length);
console.log(logicalArray,logicalArray.length);
console.log(characterArray,characterArray.length);



