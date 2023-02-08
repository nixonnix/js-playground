/* 
Curry - fn(a, b, c) => fn(a)(b)(c)


Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).


Reference: https://javascript.info/currying-partials
**/
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log("Case fn(a b c) - ", curriedSum(1, 2, 3)); //6
console.log("Case fn(a)(b, c) - ", curriedSum(1)(2, 3)); //6
console.log("Case fn(a, b)(c) - ", curriedSum(1, 2)(3)); //6
console.log("Case fn(a)(b)(c) - ", curriedSum(1)(2)(3)); //6

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
