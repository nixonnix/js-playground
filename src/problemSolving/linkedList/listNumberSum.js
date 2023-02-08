import { Node, LinkedList } from "./listBasics";

const list1 = new LinkedList();

const list2 = new LinkedList();

list1.insertAt(9, 0);
list1.insertAt(4, 1);
list1.insertAt(9, 2);

list2.insertAt(9, 0);
list2.insertAt(6, 1);
list2.insertAt(4, 1);

console.log(list1, list2);

function addList(list1, list2) {
  let node1 = list1.head;
  let node2 = list2.head;
  let carry = 0;
  // let returnList = new LinkedList();
  let returnList = new Node();
  let dummy = returnList;
  console.log(" ---- returnList ---- ", returnList);
  while (node1 || node2 || carry) {
    let v1 = node1 ? node1.value : 0;
    let v2 = node2 ? node2.value : 0;

    let res = v1 + v2 + carry;

    carry = Math.floor(res / 10);
    let digit = res % 10;
    returnList.next = new Node(digit);
    returnList = returnList.next;
    // returnList.insertLast(digit);
    console.log(" ---- returnList itrrrrr dummy ---- ", dummy);
    console.log(" ---- returnList itrrrrr ---- returnList ", returnList);
    node1 = node1?.next;
    node2 = node2?.next;
  }
  return dummy.next;
}

console.log("adding two list ---- ", addList(list1, list2));
