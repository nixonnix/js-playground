/**
 * This object is made both iterable and iterator
 *
 * For this Object to be iterable, it must have a @@Iterator method implemented at
 * [Symbol.iterator] which should be a ZERO argument function and should return an
 * Iterator Object
 *
 *
 * For this object to be iterator, it must return a sequence (finite or infinte)
 * There should be a next method which should return an Object with a value property and
 * done property. The done property will be false if the iterator is able to produce the
 * next value
 * done property will be true if the iterator has completed its sequence.
 * The value propertuy in this case of done: true may or may not return a value
 */
const obj = {
  a: 100,
  b: 200,
  c: 300,
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count == 3) {
          return {
            value: count,
            done: true,
          };
        } else {
          return {
            value: count++,
            done: false,
          };
        }
      },
    };
  },
  next: function (index = 0) {
    this["a"] = this["a"] + 1;
    return {
      value: this["a"],
      done: false,
    };
  },
};

// console.log(...obj);
// const itr = obj[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// console.log('------');
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next())

/**
 * The below object is made both an iterator and iterable.
 * This is because it has a generator function at [Symbol.iterator].
 * Generator function when called return a generator object which conforms to both
 * Iterable and Iterator protocol. That's why below object is both iterator and iterable.
 */

const newObj = {
  x: 30,
  y: 40,
  z: 50,
  *[Symbol.iterator]() {
    for (let key in this) {
      yield key;
    }
  },
};

console.log("--- the new world -------");
console.log(...newObj);
const newItr = newObj[Symbol.iterator]();
console.log(newItr.next());
console.log(...newItr);
console.log(newItr.next());

// One more example of iterable object without generators

const objX = {
  a: "apple",
  b: "ball",
  c: "cat",
  d: "dog",
  e: "elephant",
  [Symbol.iterator]() {
    const self = this;
    const keys = Object.keys(this);
    const length = keys.length;
    let count = 0;
    return {
      next: () => {
        if (count <= length - 1) {
          return {
            value: self[keys[count++]],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

console.log("itr-----", ...objX);
const obj1 = objX[Symbol.iterator]();
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
