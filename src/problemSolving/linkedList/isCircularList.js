import { Node, LinkedList } from "./listBasics";

const list = new LinkedList();

list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.insertAt(5, 5);
list.insertAt(6, 6);

// Making list circular

let node3 = list.getAt(2);
let nodeLast = list.getAt(list.size() - 1);

// console.log(node3, nodeLast);

// Making the list circular at node 3
nodeLast.next = node3;

console.log("list ---", list);

console.log("isCircularList --- ", isCircularList(list));

function isCircularList(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
