function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  console.log(result);
  return result[n];
}

//0112358
console.log("fibonacci -- ", fibonacci(20));
console.log("recFibonacci -- ", recFibonacci(20));

function recFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recFibonacci(n - 2) + recFibonacci(n - 1);
}

function memoise(fn) {
  const map = {};
  return function memoisedFunction(...parms) {
    if (map[parms]) {
      return map[parms];
    }
    const res = fn.apply(this, parms);
    map[parms] = res;
    return res;
  };
}

const memoisedFibonacci = memoise(recFibonacci);

console.log("memoisedFibonacci ---- ", memoisedFibonacci(20));
