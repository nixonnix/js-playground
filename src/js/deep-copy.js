/**
 * Given an Array or object, the function should return the deeply copied value for the same
 */

// Problems
// If value is not an object or is null, return the same
// If value is an array, return value should be an array
// Do the deep copy
// returned a new copied object

function deepCopy(val) {
  let returnObj = Array.isArray(val) ? [] : {};

  if (typeof val !== "object" || val === null) return val;

  // Object.getOwnPropertyNames(obj) provides both enumerable and non enumerbale own properties.
  // for (let key of Object.getOwnPropertyNames(obj)) {

  // for ... in works both for object and array
  for (let key in val) {
    // if (typeof val[key] === "object") {
    //   returnObj[key] = deepCopy(val[key]);
    // } else {
    //   returnObj[key] = val[key];
    // }
    returnObj[key] = deepCopy(val[key]);
  }
  return returnObj;
}

// Example
const obj1 = {
  a: 1,
  b: 2,
  c: {
    x: 100,
    y: 200,
    z: 300,
  },
  d: [1, 2, 3],
};

const obj2 = deepCopy(obj1);

console.log("-- deep copy --", obj2);
obj1.c.x = 7;
obj1.d.push(55);
console.log("-- changed copy --", obj1);

const val2 = undefined;
// const val2 = null;
// const val2 = 1234;
// const val2 = "1234";

console.log("Deepcopy Number -- ", deepCopy(val2));

export default {};
