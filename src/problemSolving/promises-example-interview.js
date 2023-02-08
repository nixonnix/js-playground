const promiseOne = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1");
};
const promiseTwo = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums/1");
};
const promiseThird = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos/1");
};

const promiseFour = () => Promise.reject("Error");

function callAll() {
  Promise.allSettled([
    promiseOne(),
    promiseTwo(),
    promiseThird(),
    promiseFour(),
  ])
    .then((responses) => {
      console.log("initial --- ", responses);
      return Promise.all(
        responses.map((each) => (each.value ? each.value.json() : each.reason))
      );
    })
    .then((responses) => {
      console.log("--- responses ---", responses);
    });
}

// callAll();

function holder() {
  const op = [];
  for (let i = 0; i < 5; i++) {
    op.push(
      ((i) =>
        function theReturnFn() {
          console.log(i);
          return i;
        })(i)
    );
  }
  return op;
}

const allFn = holder();
// console.log("--all 0--", allFn[0]());
// console.log("--all 3--", allFn[3]());

class CreateUser {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  anotherMethod() {}
}
CreateUser.prototype.getMarks = function () {
  return `student ${this.name} has secured ${this.marks}`;
};

const user = new CreateUser("Jack", 100);
// console.log(" --- user --- ", user);

const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 1000); // A
myPromise(1000).then((res) => console.log("in Promise 1")); // L

setTimeout(() => console.log("in setTimeout2"), 100); // B
myPromise(2000).then((res) => console.log("in Promise 2")); // M

setTimeout(() => console.log("in setTimeout3"), 2000); // C
myPromise(1000).then((res) => console.log("in Promise 3")); // N

setTimeout(() => console.log("in setTimeout4"), 1000); // D
myPromise(5000).then((res) => console.log("in Promise ")); // O
Promise.resolve().then(() => console.log("Fast")); // P

// 3
// in setTimeout2
// in setTimeout1
// in setTimeout4
// in setTimeout3
// in Promise 1
// in Promise 3
// in Promise 2
// in Promise
