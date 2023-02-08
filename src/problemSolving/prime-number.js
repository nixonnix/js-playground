function getPrime(num) {
  if (typeof num !== "number") {
    return num;
  }

  if (num <= 1) {
    return false;
  }

  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
