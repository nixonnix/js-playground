// Linked List

export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(value) {
    this.head = new Node(value, this.head);
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
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
  clear() {
    this.head = null;
  }
  getAt(index) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    let count = 0;
    while (node) {
      if (count === index) {
        return node;
      }
      count = count + 1;
      node = node.next;
    }
    return null;
  }
  insertAt(value, index) {
    if (!this.head) {
      this.head = new Node(value);
      return this.head;
    }

    if (index === 0) {
      this.head = new Node(value, this.head);
    }

    let previous = this.getAt(index - 1) || this.getAt(this.size() - 1);
    const node = new Node(value, previous.next);
    previous.next = node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    const node = this.getAt(index);
    previous.next = node.next;
    return node;
  }
  forEach(callback) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    let count = 0;
    while (node) {
      callback(node, count);
      count++;
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst(5);
list.insertFirst(4);
list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(1);
list.insertLast(100);
list.insertAt(3.5, 11);

// console.log("list ---- ", list);
// console.log("list size ---- ", list.size());
// console.log("list get At ---- ", list.getAt(5));
// console.log("remove At ---- ", list.removeAt(5));
// list.forEach((node, i) => {
//   console.log("list itr --- ", node, i);
// });
