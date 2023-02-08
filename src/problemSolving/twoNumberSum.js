/**
 * Given a list of numbers and a number k, return whether any two numbers from the list
 * add up to k.For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

function isAdditionPossible(arr, k) {
  if (!Array.isArray(arr)) {
    return new TypeError("expected input to be an Array, found " + typeof arr);
  }

  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    }
    map[k - arr[i]] = true;
  }
  console.log(map);
  return false;
}

console.log("isAdditionPossible --- ", isAdditionPossible([10, 15, 3, 7], 22));
