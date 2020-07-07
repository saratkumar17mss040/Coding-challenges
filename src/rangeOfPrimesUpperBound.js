// function rangeOfPrimeNumb
// @param - number
// @return - array
function rangeOfPrimeNumb(ub) {
  let flag;
  var primeArr = [];
  for (let i = 2; i <= ub; i++) {
    if (i === 0 || i === 1) {
      continue;
    }
    flag = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) primeArr.push(i);
  }
  return primeArr;
}

console.log(rangeOfPrimeNumb(10));
