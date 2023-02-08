// Array polyfills

// Map Polyfill
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Expected a function, found a - " + typeof callback);
  }
  let copyArr = [...this];
  for (let i = 0; i < this.length; i++) {
    copyArr[i] = callback(copyArr[i], i, this);
  }
  return copyArr;
};

// For Each polyfill
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Expected a function, got a - " + typeof callback);
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error("Expected a function, got a - " + typeof callback);
  }
  let acc =
    initialValue === null || initialValue === undefined
      ? this[0]
      : initialValue;
  let startIndex = initialValue === null || initialValue === undefined ? 1 : 0;
  debugger;
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Expected a function, got a - " + typeof callback);
  }
  let res = undefined;
  for (let i = 0; i < 10; i++) {
    if (callback(this[i], i, this)) {
      res = this[i];
      break;
    }
  }
  return res;
};

Array.prototype.myFindIndex = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Expected a function, got a - " + typeof callback);
  }
  let res = -1;
  for (let i = 0; i < 10; i++) {
    if (callback(this[i], i, this)) {
      res = i;
      break;
    }
  }
  return res;
};

// Array groupBy polyfill
Object.defineProperty(Array.prototype, "myGroupBy", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function myGroupBy(callback) {
    if (typeof callback !== "function") {
      throw new Error(
        "Expected a callback function, found a - " + typeof callback
      );
    }
    const returnObj = {};
    for (let i = 0; i < this.length; i++) {
      if (!returnObj[callback(this[i], i, this)]) {
        returnObj[callback(this[i], i, this)] = [this[i]];
      } else {
        returnObj[callback(this[i], i, this)].push(this[i]);
      }
    }
    return returnObj;
  },
});

var sampleArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var newArr = sampleArray.myMap((val, i, arr) => {
  //   console.log("myMap index - " + i);
  //   console.log("Original Arr - " + arr);
  return 2 * val;
});
// console.log("my Map result -- ", newArr);

sampleArray.myForEach((val, i, arr) => {
  //   console.log("myForEach val - " + val);
  //   console.log("myForEach index - " + i);
  //   console.log("Original myForEach - " + arr);
});

// console.log(sampleArray.myReduce((acc, curr) => acc + curr, 200));

// console.log(sampleArray.myFind((val) => val > 60));
// console.log(sampleArray.myFindIndex((val) => val > 90));

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

Function.prototype.myApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

Function.prototype.myBind = function (context) {
  const self = this;
  return function (...args) {
    self.call(context, ...args);
  };
};

function foo(...args) {
  console.log(this);
  console.log(...args);
}

const sampleObj = {
  name: "Joe",
  age: "28",
  gender: "female",
};
let bindedFn = foo.myBind(sampleObj);
// bindedFn(4, 1, 3);

// new Ployfill

Object.newPoly = function (Fn, ...args) {
  const retObj = {};
  retObj.__proto__ = Fn.prototype;
  Fn.call(retObj, ...args);
  return retObj;
};

// Example
function Animal() {
  this.prajati = "Janwar";
}

Animal.prototype.getLegs = function () {
  return 4;
};

function Cat(name) {
  this.name = name;
  //   Animal.call(this);
  //   Object.assign(this, new Animal());
  //   this.base = Animal;
  //   this.base();
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.getName = function () {
  return this.name;
};
var billa = Object.newPoly(Cat, "Billa");

console.log(billa);
console.log(billa.getName());
console.log(billa.getLegs());

for (let key in billa) {
  if (billa.hasOwnProperty(key)) {
    console.log(key);
  }
}

console.log(Object.keys(billa));

console.log(Object.getOwnPropertyNames(billa));
console.log(Object.entries(billa));

export default {};
