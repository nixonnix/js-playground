// Prints every one second: Asyncronous solution
const testFn = async () => {
  for (let i = 1; i <= 5; i++) {
    pritntIt(i);
  }
};

// Prints every one second: Asyncronous solution
const asyncTestFn = async () => {
  for (let i = 1; i <= 5; i++) {
    let res = await printItAsync(i);
    console.log("Async - every one second - ", res);
  }
};

/**  Prints every nth second
 * - for i = 1, prints after 1 sec
 * - for i = 2, prints after 2 sec from printing of 1
 * - for i = 3, prints after 3 sec from printing of 2
 * Prints at 1, 3, 5, 8 ....secs. this is AP
 * i = 1, print at 1 sec
 * i = 2, print at 3 sec
 * i = 3, print at 5 sec ansd soo on
 */

const testNthFn = async () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      () => console.log("sync - every nth second - ", i),
      (i * (i + 1) * 1000) / 2
    );
  }
};

function printItAsync(i) {
  return new Promise((res, rej) => {
    setTimeout(() => res(i), 1000);
  });
}

function pritntIt(i) {
  setTimeout(() => console.log("sync - every one second - ", i), i * 1000);
}

// testFn();
asyncTestFn();
// testNthFn();

export default testFn;
