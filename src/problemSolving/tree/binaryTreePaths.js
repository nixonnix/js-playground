/**
 * 
 * Given a binary tree, return all paths from the root to leaves.
 * 
 * For example, given the tree:
 * 
 * 1
  / \
 2   3
    / \
   4   5
Return [[1, 2], [1, 3, 4], [1, 3, 5]]
 * 
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
  insertNode(val) {
    if (this.left && val < this.value) {
      return this.left.insertNode(val);
    } else if (this.right && val > this.value) {
      return this.right.insertNode(val);
    } else if (val < this.value) {
      this.left = new BinaryTree(val);
    } else if (val > this.value) {
      this.right = new BinaryTree(val);
    }
  }
  printDepthFirst() {
    let queue = [this];
    let op = [];
    while (queue.length > 0) {
      const node = queue.shift();

      if (node.right) {
        queue.unshift(node.right);
        // op[op.length - 1].push(node.value);
      }
      if (node.left) {
        queue.unshift(node.left);
        // op[op.length - 1].push(node.value);
      }
      op.push(node.value);
      if (node.left === undefined || node.right === undefined) {
        // op[op.length - 1].push(node.value);
        // op.push([]);
        // console.log("last ---", node.value);
      } else {
        // console.log("each ---", node.value);
      }
      //   op.push(node.value);
    }
    return op;
  }
}

const binaryTree = new BinaryTree(1);
binaryTree.insertNode(2);
binaryTree.insertNode(3);
binaryTree.insertNode(4);
binaryTree.insertNode(5);

console.log("--- binaryTree ---", binaryTree);
console.log("--- print it from binaryTree ---", binaryTree.printDepthFirst());
