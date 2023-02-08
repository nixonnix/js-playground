window.newSetInterval = function newSIT(fn, delay) {
  let controllerFlag;
  function internal() {
    controllerFlag = setTimeout(function () {
      fn();
      internal();
    }, delay);
  }
  internal();
  return function clearNewSI() {
    clearTimeout(controllerFlag);
  };
};

// Initiate the interval
const trialController = newSetInterval(foo, 1000);

// clearinterval after 10 seconds
setTimeout(() => trialController(), 10000);

function foo() {
  console.log("Hello!!");
}
