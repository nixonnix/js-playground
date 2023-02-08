function isIterable(input) {
  if (input === null) {
    return false;
  }
  return typeof input[Symbol.iterator] === "function";
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("One");
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Two");
  }, 1500);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Three");
  }, 500);
});

Promise.myAll = function (promises) {
  if (!isIterable(promises)) {
    return Promise.reject(new TypeError("Object is not an iterable!!"));
  }
  const op = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((eachPromise, i) => {
      eachPromise
        .then((res) => {
          op[i] = res;
          if (++counter === promises.length) {
            resolve(op);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};

Promise.myAllSettled = function (promises) {
  if (!isIterable(promises)) {
    return Promise.reject(new TypeError("Object is not an iterable!!"));
  }
  let count = 0;
  const op = [];
  return new Promise((resolve, reject) => {
    promises.forEach((eachPromise, index) => {
      eachPromise
        .then((res) => {
          op[index] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((e) => {
          op[index] = {
            status: "rejected",
            reason: e,
          };
        })
        .finally(() => {
          if (++count === promises.length) {
            resolve(op);
          }
        });
    });
  });
};

// First resolved/rejected promise is returned
Promise.myRace = function (promises) {
  if (!isIterable(promises)) {
    return Promise.reject(new TypeError("Object is not an iterable!!"));
  }
  return new Promise((resolve, reject) => {
    promises.forEach((eachPromise) => {
      eachPromise
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};

// First successful promise is returned, irrespective of even a rejection is there before success
// An Aggregate Error if thrown only if all the promise fails.
Promise.myAny = function (promises) {
  if (!isIterable(promises)) {
    return Promise.reject(new TypeError("Object is not an iterable!!"));
  }
  let rejectCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((eachPromise) => {
      eachPromise
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          if (++rejectCount === promises.length) {
            reject(new AggregateError("", "All promise got rejected"));
          }
        });
    });
  });
};

Promise.allSettled([p2, p1, p3])
  .then((res) => {
    console.log("promise.all - ", res);
  })
  .catch((e) => console.log("promise.all error - ", e));

Promise.myAllSettled([p2, p1, p3])
  .then((res) => {
    console.log("Promise.myAll - ", res);
  })
  .catch((e) => {
    console.log("Promise.myAll error - ", e);
  });

// Object.defineProperty(Promise, "myAny", {
//   configurabel: false,
//   enumerable: false,
//   writable: false,
//   value: function (promises) {
//     if (!Array.isArray(promises)) {
//       throw new Error();
//     }
//     let resolved = [];
//     let err = [];
//     let count = 0;
//     return new Promise((resolve, reject) => {
//       promises.forEach((eachPromise) => {
//         eachPromise
//           .then((res) => {
//             resolved.push(res);
//             resolve(res);
//           })
//           .catch((e) => {
//             err.push(e);
//           })
//           .finally(() => {
//             count++;
//             if (count === promises.length && resolved.length === 0) {
//               reject(new AggregateError(err, "All promises were rejected"));
//             }
//           });
//       });
//     });
//   },
// });

export default {};
