class Tree {
  constructor(value) {
    this.node = value;
    this.left = undefined;
    this.right = undefined;
  }
  addNode(value) {
    if (value < this.node && this.left) {
      this.left.addNode(value);
    } else if (value < this.node) {
      this.left = new Tree(value);
    } else if (value > this.node && this.right) {
      this.right.addNode(value);
    } else if (value > this.node) {
      this.right = new Tree(value);
    }
  }

  contains(value) {
    if (value < this.node && this.left) {
      return this.left.contains(value);
    } else if (value > this.node && this.right) {
      return this.right.contains(value);
    } else if (value === this.node) {
      return true;
    } else {
      return false;
    }
  }
  traverse(callback) {
    let queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      callback(node);
    }
  }

  size() {
    let queue = [this];
    let count = 0;
    while (queue.length !== 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      count++;
    }
    return count;
  }

  BFS() {
    let queue = [this];
    let res = "";
    while (queue.length) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      res = res + node.node + "; ";
    }
    return res;
  }

  DFS() {
    let queue = [this];
    let op = "";
    while (queue.length) {
      const node = queue.shift();

      if (node.right) {
        queue.unshift(node.right);
      }
      if (node.left) {
        queue.unshift(node.left);
      }
      op = op + node.node + " || ";
    }
    return op;
  }

  levelWiseEntries() {
    let queue = [this, "s"];
    let op = [[]];
    while (queue.length > 1) {
      const node = queue.shift();
      if (node === "s") {
        queue.push("s");
        op.push([]);
      } else if (node.node !== undefined) {
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
        op[op.length - 1].push(node.node);
      }
    }
    return op;
  }

  zigZagPrinting() {
    const entries = this.levelWiseEntries();
    for (let i = 0; i < entries.length; i++) {
      if (i % 2 !== 0) {
        entries[i].reverse();
      }
    }
    return entries;
  }
}

let myTree = new Tree(100);

// Creation of tree - addNode
myTree.addNode(50);
myTree.addNode(150);
myTree.addNode(20);
myTree.addNode(0);
myTree.addNode(1);
myTree.addNode(120);
myTree.addNode(40);
myTree.addNode(180);
myTree.addNode(250);
myTree.addNode(-11);
myTree.addNode(40);
myTree.addNode(130);
myTree.addNode(-11);

console.log(myTree);

// // Searching in tree - Contains
// console.log(myTree.contains(-11));
// console.log(myTree.contains(130));
// console.log(myTree.contains(200));
let op = "";
myTree.traverse((item) => {
  op = op + item.node + ", ";
});

// console.log("All elements - " + op);
// console.log("Tree Size - " + myTree.size());
// console.log("Tree BFS - " + myTree.BFS());
// console.log("Tree DFS - " + myTree.DFS());
// console.log("Tree levelWiseEntries - ", myTree.levelWiseEntries());
// console.log("Tree zigZagPrinting - ", myTree.zigZagPrinting());
// console.log("Tree zigZagPrinting strig- ", String(myTree.zigZagPrinting()));
