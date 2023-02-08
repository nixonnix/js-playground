import { Node, LinkedList } from "./listBasics";

const list = new LinkedList();

list.insertAt(1, 0);
list.insertAt(2, 1);
list.insertAt(3, 2);
list.insertAt(4, 3);
list.insertAt(5, 4);
list.insertAt(6, 5);
list.insertAt(7, 6);
list.insertAt(8, 7);

console.log("list ----", list);
console.log("listSize ----", listSize(list));
console.log("midpoint ----", midPoint(list));

function listSize(list) {
  let node = list.head;
  let count = 0;
  while (node) {
    count = count + 1;
    node = node.next;
  }
  return count;
}

function midPoint(list) {
  let first = list.head;
  let second = list.head;
  while (second.next && second.next.next) {
    first = first.next;
    second = second.next.next;
  }
  return first;
}
