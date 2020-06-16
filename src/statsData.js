// this program is just a baisc implementation of categorizing data based on statistics.
// we can do data viusalization using D3.js in javaScript for these data.
// numberic data in the array represents the measured weight of a person for each person.
const allTypesOfData = [['name', 'nationality', 75, 74, 76, 73]];

const ordinalScaleforAverageWeight = [
  'much greater than normal',
  'greater than normal',
  'normal',
  'lower than normal',
  'much lower than normal',
];

const nominalData = [];
const quantitativeData = [];

for (let i = 0; i < allTypesOfData.length; i++) {
  const innerArray = allTypesOfData[i];
  for (let j = 0; j < innerArray.length; j++) {
    const value = innerArray[j];
    if (typeof value === 'number') quantitativeData.push(value);
    else nominalData.push(value);
  }
}

let sumOfweigths = 0;
for (let weight of quantitativeData) {
  sumOfweigths += weight;
}

const avg = Math.round(sumOfweigths / quantitativeData.length);
let ordinalResult = '';

if (avg < 60) ordinalResult = ordinalScaleforAverageWeight[0];
else if (avg < 70) ordinalResult = ordinalScaleforAverageWeight[1];
else if (avg <= 75) ordinalResult = ordinalScaleforAverageWeight[2];
else if (avg > 75 && avg < 85) ordinalResult = ordinalScaleforAverageWeight[3];
else ordinalResult = ordinalScaleforAverageWeight[4];

console.log('***Summary of the given data***');
console.log('   Quantiative data   ');
console.log('   ' + quantitativeData + '  ');
console.log('   Nominal data   ');
console.log('   ' + nominalData + '  ');
console.log('   Ordinal scale   ');
console.log('   ' + ordinalResult + '  ');
