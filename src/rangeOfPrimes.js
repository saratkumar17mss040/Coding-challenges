// function rangeofPrimeNum
// @params - {number,number}
// @return - array
function rangeOfPrimeNum(lb, ub) {
  let flag;
  var primeArr = [];
  for (let i = lb; i <= ub; i++) {
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

console.log(rangeOfPrimeNum(1, 10));
