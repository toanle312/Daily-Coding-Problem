/**
  The question we'll work through is the following: return a new sorted merged list from K sorted lists, 
  each with size N. Before we move on any further, you should take some time to think about the solution!

  For example, if we had [[10, 15, 30], [12, 15, 20], [17, 20, 32]], 
  the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].
*/

const merge2SortedLists = (list1, list2) => {
  const arr = [];
  let i = 0, j = 0, n = list1.length, m = list2.length;
  while (i < n && j < m) {
    if (list1[i] < list2[j]) {
      arr.push(list1[i]);
      i++;
    } else {
      arr.push(list2[j]);
      j++;
    }
  }

  while (i < n) {
    arr.push(list1[i]);
    i++;
  }

  while (j < m) {
    arr.push(list2[j]);
    j++;
  }

  return arr;
}

const solution = (sortedLists) => {
  let result = sortedLists[0];
  for (let i = 1; i < sortedLists.length; ++i) {
    result = merge2SortedLists(result, sortedLists[i]);
  }
  return result;
}

const trick_solution = (sortedLists) => {
  const result = sortedLists.reduce((res, list) => [...res, ...list]);
  return result.sort();
}

console.log(trick_solution([[10, 15, 30], [12, 15, 20], [17, 20, 32]]));