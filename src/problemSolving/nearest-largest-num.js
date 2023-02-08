/**
 * Given an array of numbers and an index i, return the index of the nearest larger number of
 * the number at index i, where distance is measured in array indices.
 * For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.
 * If two distances to larger numbers are the equal, then return any one of them.
 * If the array at i doesn't have a nearest larger integer, then return null.
 */

function neraestLargest(arr, index) {
  const map = {};
  const ref = arr[index];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > ref && i !== index && !map[arr[i]]) {
      map[arr[i]] = { index: i, diff: arr[i] - ref };
    }
  }
  let lowest = Object.keys(map).sort((a, b) => a - b)[0];
  if (!lowest) return null;
  return map[lowest].index;
}

console.log(neraestLargest([4, 1, 3, 5, 6], 0)); // 3
console.log(neraestLargest([4, 1, 3, 5, 6], 2)); // 0
console.log(neraestLargest([4, 1, 3, 5, 6], 4)); // null

export default neraestLargest;
