class Tree {
  constructor() {
    this.root = undefined;
  }
  traverse(callBack) {
    let queue = [this.root];
    while (queue.length !== 0) {
      const node = queue.shift();
      queue.push(...node.children);
      callBack(node);
    }
  }
  BFS() {
    let queue = [this.root];
    let op = "";
    while (queue.length !== 0) {
      const node = queue.shift();
      queue.push(...node.children);
      op = op + node.value + "; ";
    }
    console.log(op);
  }
  DFS() {
    let queue = [this.root];
    let op = "DFS - ";
    while (queue.length !== 0) {
      const node = queue.shift();
      queue.unshift(...node.children);
      op = op + node.value + " || ";
    }
    console.log(op);
  }
  size() {
    const queue = [this.root];
    let size = 0;
    while (queue.length !== 0) {
      const node = queue.shift();
      queue.push(...node.children);
      size = size + 1;
    }
    return size;
  }
  levelSize() {
    const queue = [this.root, "s"];
    const op = [0];
    while (queue.length > 1) {
      const node = queue.shift();
      if (node === "s") {
        queue.push("s");
        op.push(0);
      } else {
        queue.push(...node.children);
        ++op[op.length - 1];
      }
    }
    return op;
  }
  levelWiseValues() {
    let queue = [this.root, "s"];
    let op = [[]];
    while (queue.length > 1) {
      const node = queue.shift();
      if (node === "s") {
        queue.push("s");
        op.push([]);
      } else {
        queue.push(...node.children);
        op[op.length - 1].push(node.value);
      }
    }
    return op;
  }
  zigZagPrint() {
    let op = this.levelWiseValues();
    for (let i = 0; i < op.length; i++) {
      if (i % 2 !== 0) {
        op[i] = op[i].reverse();
      }
    }
    return op;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChildren(node) {
    this.children.push(node);
  }
  removeChildren(value) {
    this.children = this.children.filter((node) => {
      return node.value !== value;
    });
  }
}

const Node10 = new Node(10);
Node10.addChildren(new Node(8));
Node10.addChildren(new Node(5));
Node10.addChildren(new Node(2));
const Node20 = new Node(20);
Node20.addChildren(new Node(15));
Node20.addChildren(new Node(18));
const Node30 = new Node(30);
Node30.addChildren(new Node(25));
Node30.addChildren(new Node(28));
Node30.addChildren(new Node(21));
Node30.addChildren(new Node(22));
const Node40 = new Node(40);
Node40.addChildren(new Node(38));
Node40.addChildren(Node20);
Node40.addChildren(Node30);
const Node50 = new Node(50);
Node50.addChildren(new Node(45));
Node50.addChildren(new Node(35));
Node50.addChildren(Node30);

const Node80 = new Node(80);

Node80.addChildren(Node50);
Node80.addChildren(Node40);
Node80.addChildren(Node10);
Node80.addChildren(Node20);

const myTree = new Tree();
myTree.root = Node80;
console.log(myTree);
let op = "";
myTree.traverse((node) => (op = op + node.value + ", "));
console.log(op);
myTree.BFS();
myTree.DFS();
console.log("tree size is - " + myTree.size());
console.log("Level Size - " + myTree.levelSize());
console.log("Level by values - ", myTree.levelWiseValues());
console.log("ZigZg Print - " + myTree.zigZagPrint());

export default {};
