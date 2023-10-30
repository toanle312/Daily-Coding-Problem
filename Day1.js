/*
  This problem was recently asked by Google.

  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

  Bonus: Can you do this in one pass?
*/

const solution = (arr, k) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (hash[num] !== undefined) {
      return true;
    }
    hash[k - num] = num;
  }
  return false;
}

const arr = [10, 15, 3, 7];
const k = 27;
console.log(solution(arr, k));