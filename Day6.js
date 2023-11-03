/*
  This problem was asked by Google.

  An XOR linked list is a more memory efficient doubly linked list. 

  Instead of each node holding next and prev fields, 
  it holds a field named both, which is an XOR of the next node and the previous node. 
  Implement an XOR linked list; it has an add(element) which adds the element to the end, 
  and a get(index) which returns the node at index.

  If using a language that has no pointers (such as Python), you can assume you have
  access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
*/

class Node {
  constructor(val) {
    this.value = val;
    this.both = null;
  }
}

class XORLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() { return this.head; }

  getTail() { return this.tail; }

  add(node) {
    if (this.head === null) {
      this.head = this.tail = node;
    }
    else {
      // this.tail.both = 
    }
  }

  get(index) {
    let startNode = this.head;
    let i = 0;
    while (i < index) {
      node = node.next;
      i++;
    }
    return node;
  }
}

const list = new XORLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
console.log(node1 ^ node2);

// TODO: this problem should be implemented by C, C++