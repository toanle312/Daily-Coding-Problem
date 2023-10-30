/*
  This problem was asked by Stripe.

  Given an array of integers, find the first missing positive integer in linear time and constant space. 
  In other words, find the lowest positive integer that does not exist in the array. 
  The array can contain duplicates and negative numbers as well.

  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

  You can modify the input array in-place.
*/

const solution = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    while (arr[i] >= 1 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }

  }

  for (let i = 0; i < n; i++) {
    if (arr[i] != i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(solution([2, 2, 2, 3]))
