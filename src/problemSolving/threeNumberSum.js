/**
 * Given a list of numbers and a number k, return whether any three numbers from the list
 * add up to k.For example, given [10, 15, 3, 8, 2, 4] and k of 21, return [10, 3, 8].
 */

function twoNumberSum(arr, target) {
  const map = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map[complement]) {
      res.push([map[complement], complement]);
    } else {
      map[arr[i]] = complement;
    }
  }
  if (res.length) {
    return res;
  }
  return false;
}

function threeNumberSum(arr, target) {
  const op = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const complemet = target - arr[i];
    let targetarr = [...arr];
    targetarr.splice(i, 1);
    map[arr[i]] = twoNumberSum(targetarr, complemet);
  }
  console.log("map--", map);
  const res = {};
  for (let key in map) {
    if (map[key]) {
      const triplets = [Number(key), ...map[key]].sort((a, b) => a - b);
      res[triplets.join("")] = triplets;
    }
  }
  return res;
}

console.log(
  "threeNumberSum ----",
  threeNumberSum([10, 15, 3, 8, 2, 4, 11, 9], 21)
);
