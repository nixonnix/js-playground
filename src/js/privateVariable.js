class Counter {
  #count = 0;
  #changeCount(val) {
    this.#count = this.#count + val;
  }
  increment() {
    this.#changeCount(1);
  }
  decrement() {
    this.#changeCount(-1);
  }
  value() {
    return this.#count;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment(); //1
counter1.increment(); //2
counter1.increment(); //3
counter1.decrement(); //2

console.log("counter 1 value --- ", counter1.value());

counter2.decrement(); // -1
counter2.decrement(); // -2
counter2.decrement(); // -3
counter2.increment(); // -2

console.log("counter 2 value --- ", counter2.value());

function CountEE() {
  var count = 0;
  function changeCount(val) {
    count = count + val;
  }
  return {
    increment() {
      changeCount(1);
    },
    decrement() {
      changeCount(-1);
    },
    value() {
      return count;
    },
  };
}

const ounter1 = CountEE();

ounter1.increment();
ounter1.increment();
ounter1.increment();
ounter1.increment();
ounter1.increment();
ounter1.decrement();
console.log("vaagfjh --- ", ounter1.value());

const ounter2 = CountEE();

ounter2.decrement();
ounter2.decrement();
ounter2.decrement();
ounter2.decrement();
ounter2.decrement();
ounter2.decrement();
console.log("vaagfjh --- ", ounter2.value());
