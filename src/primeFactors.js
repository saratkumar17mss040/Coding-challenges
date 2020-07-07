// A function to print all prime factors
// of a given number n
// @param - number
// @return - array
function rangeOfPrimeFactors(num) {
  let primeFactors = [];

  // Print the number of 2s that divide n
  while (num % 2 === 0) {
    primeFactors.push(2);
    num = Math.floor(num / 2);
  }

  // n must be odd at this point.  So we can
  // skip one element (Note i = i +2)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    // While i divides n, push i and divide n
    while (num % i === 0) {
      primeFactors.push(i);
      num = Math.floor(num / i);
    }
  }

  // This condition is to handle the case whien
  // n is a prime number greater than 2
  if (num > 2) {
    primeFactors.push(num);
  }
  return primeFactors;
}

console.log(rangeOfPrimeFactors(128));
