/**
 * Print a sequence such that numbers divisible by 3 should print fizz and
 * numbers divisible by 5 should pring buzz
 * number divisible by both 3 and 5 should print fizzbuzz
 */

function printSequence(n) {
  const op = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      op.push("fizzbuzz");
    } else if (i % 3 === 0) {
      op.push("fizz");
    } else if (i % 5 === 0) {
      op.push("buzz");
    } else {
      op.push(i);
    }
  }
  return op;
}

console.log("printSequence ---- ", printSequence(50));
