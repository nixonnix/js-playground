// https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

// Callback hell
function one(callback) {
  // Do Something

  callback("Iron Man-");
}

function two(callback) {
  // Do Something

  callback("An Avanger-");
}

function three(callback) {
  // Do Something

  callback("Verified by Marvel");
}

// Callback hell in action
one(function (a) {
  two(function (b) {
    three(function (c) {
      console.log(a + b + c);
    });
  });
});

// Promise
function p1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Captain America-"))
  );
}
function p2() {
  return new Promise((resolve) => setTimeout(() => resolve("Avenger's Head-")));
}
function p3() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Verified by Marvel."))
  );
}

// Callback hell solved by promise
p1().then((res1) => {
  p2().then((res2) => {
    p3().then((res3) => {
      console.log(res1 + res2 + res3);
    });
  });
});

// Callback hell vs Promise

// Callback helll
function addString(previous, current, callback) {
  setTimeout(() => {
    callback(previous + " " + current);
  }, Math.floor(Math.random() * 100) + 1);
}

function addAll() {
  addString("", "A", (result) => {
    addString(result, "B", (result) => {
      addString(result, "C", (result) => {
        console.log(result); // Prints out " A B C"
      });
    });
  });
}
addAll();

function addStringP(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function addAllP() {
  addStringP("", "A")
    .then((result) => {
      return addStringP(result, "B");
    })
    .then((result) => {
      return addStringP(result, "C");
    })
    .then((result) => {
      console.log(result); // Prints out " A B C"
    });
}
addAllP();
