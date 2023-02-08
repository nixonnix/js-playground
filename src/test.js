// import Singleton from "./js/designPatterns/creational/singleton";
// import decorator from "./js/designPatterns/structural/decorator";
// import observer from "./js/designPatterns/behavioral/observer";
// import Strategy from "./js/designPatterns/behavioral/strategy";

// var jack = new Singleton("Jack");
// var john = new Singleton("John");

// console.log("jack -- ", jack);
// console.log("john -- ", john);

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(value) {
    this.head = new Node(value, this.head);
  }
  insertLast(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let node = this.head;

    while (node) {
      if (!node.next) {
        node.next = new Node(value);
        return;
      }
      node = node.next;
    }
  }
  getAt(pos) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === pos) {
        return node;
      }
      count++;
      node = node.next;
    }
    return node;
  }
  size() {
    let node = this.head;
    let count = 0;
    if (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  insertAt(pos, val) {
    if (!this.head) {
      this.head = new Node(val);
    }
    if (pos === 0) {
      this.head = new Node(val, this.head);
    }
    let prev = this.getAt(pos - 1) || this.getAt(this.size() - 1);
    prev.next = new Node(val, prev.next);
  }
  removeAt(pos) {
    if (!this.head) {
      return;
    }
    if (pos === 0) {
      this.head = this.head.next;
    }
    let prev = this.getAt(pos - 1);
    if (!prev || !prev.next) {
      return;
    }
    const node = prev.next;
    prev.next = node.next;
    return node;
  }
}

const list = new LinkedList();

list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

console.log("-- list --", list);
console.log("-- list: 1 --", list.getAt(1));
console.log("-- list: 3 --", list.getAt(3));
