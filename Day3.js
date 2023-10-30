/*
  This problem was asked by Google.

  Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, 
  and deserialize(s), which deserializes the string back into the tree.

  For example, given the following Node class

  class Node:
      def __init__(self, val, left=None, right=None):
          self.val = val
          self.left = left
          self.right = right
          
  The following test should pass:

  node = Node('root', Node('left', Node('left.left')), Node('right'))
  assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

const deserializeHelper = (queue) => {
  const value = queue.shift()

  if(value === "null") return null;

  const node = new Node(value);
  node.left = deserializeHelper(queue);
  node.right = deserializeHelper(queue);

  return node;
}

const deserialize = (str) => {
  const queue = str.split(', ');
  return deserializeHelper(queue)
}

const serialize = (node) => {
  if (node === null) return "null";
  return node.value + ", " + serialize(node.left) + ", " + serialize(node.right);
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))
console.log(serialize(node))
console.log(deserialize(serialize(node)))
console.log(node);