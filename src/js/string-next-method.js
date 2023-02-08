/**
 * PROBLEM:
 *  Write a method called next so that if we call some String.next, it should return
 * one alphabet at a time.
 * example: const name = 'Jack';
 * name.next() // J
 * name.next () // a
 * name.next() // c
 * name.next () // k
 * */

/**
 * SOLUTION
 * Create an identifier in string's prototype that will hold the ongoing iterator sequence.
 * This identifier will be used to return the current value from the ongoing iterator sequence.
 *
 * Create an identifier in string's prototype taht will hold the previous value. This value
 * will be later used to compare whether the current string is same as previous or not.
 *
 * Check 1: Check whether the ongoing iterable is undefined (initail case),
 * OR
 * the ongoing iterable has reached the last value of sequence. If yes,
 * Assign the iterable value holder with a new iterable created from this new value
 *
 *
 * Check 2: Check whether the string value has been changed to a new string. If yes,
 * Aassign the iterable value holder with a new iterable created from this new value
 *
 *
 * Update the previous value holder with current value
 * Return the value from the iteraor sequence
 */

String.prototype.next = function () {
  let nextValue = String.prototype.temp?.next();

  // Check whether ongoing iterable has reached it's last value
  if (
    !String.prototype.temp ||
    nextValue?.done ||
    String.prototype.prev?.toString() !== this.toString() // Check wheter a new string is there
  ) {
    String.prototype.temp = this[Symbol.iterator]();
    nextValue = String.prototype.temp.next();
  }

  // Update the prev value identifier with current value
  String.prototype.prev = this;

  // Return the value from ongoing iterator sequence
  return nextValue?.value;
};

const namee = "Chitranjan";
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next - 0", namee.next());
console.log("name next - 1", namee.next());
console.log("name next - 2", namee.next());
console.log("name next", namee.next());
console.log("name next - 0", namee.next());
console.log("name next - 1", namee.next());
console.log("name next - 2", namee.next());
console.log("name next - 0", namee.next());
console.log("name next - 1", namee.next());
console.log("name next - 2", namee.next());
console.log("name next - 3", namee.next());
console.log("name next - 4", namee.next());
console.log("name next - 5", namee.next());
const name2 = "Monalisha";
console.log("name2 - 0 next", name2.next());
console.log("name2 next", name2.next());
console.log("name2 next", name2.next());
console.log("name2 next", name2.next());
console.log("name2 next", name2.next());
console.log("name2 next", name2.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
console.log("name next", namee.next());
