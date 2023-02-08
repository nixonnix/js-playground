console.log(sum(2)(4)(6)(1)(10)()); // 13
console.log(sum(2)(4)()); // 6
console.log(sum(3)());

function sum(arg1) {
  return function (arg2) {
    if (arg2) {
      return sum(arg1 + arg2);
    } else {
      return arg1;
    }
  };
}

export default sum;
