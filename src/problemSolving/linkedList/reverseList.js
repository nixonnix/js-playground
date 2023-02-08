import { Node, LinkedList } from "./listBasics";

const list = new LinkedList();

list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.insertAt(5, 5);
list.insertAt(6, 6);

console.log("List ---- ", list);
reverseList(list);
console.log("reverseList ---- ", list);

function reverseList(list) {
  let prev = null;
  let curr = list.head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  list.head = prev;
}

// A > B > C

// null < A < B < C
