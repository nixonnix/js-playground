function debounce(fn, delay) {
  let timer;
  return function (...params) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...params);
    }, delay);
  };
}

function throttle(fn, delay) {
  let isAllowed = true;
  return function (...params) {
    if (!isAllowed) {
      return;
    }

    fn.call(this, ...params);
    isAllowed = false;

    setTimeout(() => {
      isAllowed = true;
    }, delay);
  };
}

function foo(value) {
  console.log("this is value - " + value);
}

let debouncedFoo = debounce(foo, 100);
let throttledFoo = throttle(foo, 50);

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    // debouncedFoo(i);
  }, i * 105);
}

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    throttledFoo(i);
  }, i * 10);
}

export default {};
