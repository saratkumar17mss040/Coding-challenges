// check whether a given number is prime or not
// function prime
// @param - number
// @return - number
function prime(num) {
  let flag = true;
  for (let i = 2; i <= num - 1; i++) {
    // i =2 2 <= 4
    // i =3 3 <= 4
    // i =4 4 <= 4
    if (num % i === 0) {
      // 5%2 !=0
      flag = false;
      break;
    }
  }
  if (flag === true) return `${num} is a prime number`;
  else return `${num} is not a prime number`;
}

console.log(prime(5));
