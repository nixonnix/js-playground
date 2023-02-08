import { Node, LinkedList } from "./listBasics";

const list = new LinkedList();

list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.insertAt(5, 5);
list.insertAt(6, 6);
list.insertAt(7, 7);
list.insertAt(8, 8);
list.insertAt(9, 9);
list.insertAt(10, 10);
list.insertAt(11, 11);

console.log("list ---- ", list);
console.log("stepBackFromtail --- ", stepBackFromtail(list, 10));

function stepBackFromtail(list, n) {
  let slow = list.head;
  let fast = list.head;
  let count = 0;
  while (count <= n) {
    fast = fast.next;
    count++;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
