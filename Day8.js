/*
  This problem was asked by Google.

  A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

  Given the root to a binary tree, count the number of unival subtrees.

  For example, the following tree has 5 unival subtrees: (tất cả các node trong nhánh con có cùng value) 
  => lá và null cũng là unival subtrees

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/

class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

const countUnivalTrees = (root) => {
  if (root === null) return 0;
  let count = 0;
  count = countUnivalTrees(root.left) + countUnivalTrees(root.right);
  if (isUnivalTree(root)) {
    count = count + 1;
  }

  return count;
}

const isUnivalTree = (root) => {
  if (root === null) return true;
  if (root.left && root.left.value !== root.value) return false;
  if (root.right && root.right.value !== root.value) return false;
  return isUnivalTree(root.left) && isUnivalTree(root.right);
}

const countUnivalTrees2 = (root) => {
  const [total, _] = helper(root);
  return total;
}

const helper = (root) => {
  if (root === null) return [0, true];
  const [leftCount, is_left_univalTree] = helper(root.left);
  const [rightCount, is_right_univalTree] = helper(root.right);
  let is_univalTree = true;
  if (!is_left_univalTree && !is_right_univalTree) isUnivalTree = false;
  if (root.left && root.left.value !== root.value) isUnivalTree = false;
  if (root.right && root.right.value !== root.value) isUnivalTree = false;
  if (is_univalTree) {
    return [leftCount + rightCount + 1, true];
  }
  return [leftCount + rightCount, false];
}

const rootNode = new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)))
console.log(countUnivalTrees(rootNode));