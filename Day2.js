/*
  This problem was asked by Uber.

  Given an array of integers, return a new array such that each element at index i of the new array is 
  the product of all the numbers in the original array except the one at i.

  For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
  If our input was [3, 2, 1], the expected output would be [2, 3, 6].

  Follow-up: what if you can't use division?
*/
const solution = (arr) => {
  const result = [];
  const n = arr.length;
  let temp = 1;
  for (let i = 0; i < n; i++) {
    let res = temp;
    for (let j = i + 1; j < n; j++) {
      res = res * arr[j];
    }
    result.push(res);
    temp = temp * arr[i];
  }

  console.log(result)
  return result;
}

const arr = [1, 2, 3, 4, 5];
solution(arr);
