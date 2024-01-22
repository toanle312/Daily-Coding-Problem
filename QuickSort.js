const parition = (arr, low, high) => {

  // ------------Method 1--------------

  const pivot = arr[high];
  let left = low;
  let right = high - 1;

  while (left < right) {
    if (arr[left] < pivot) {
      left++;
    }
    else if (arr[right] > pivot) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  [arr[left], arr[high]] = [arr[high], arr[left]];
  return left;
  // ----------End of Method 1---------

  // ------------Method 2--------------

  // let i = (low - 1);

  // for (let j = low; j < high; j++) {
  //   if (arr[j] < pivot) {
  //     i++;
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //   }
  // }
  // [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // return (i + 1);
  // ----------End of Method 2---------
}

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const i = parition(arr, 0, arr.length - 1);
  return [...quickSort(arr.slice(0, i)), arr[i], ...quickSort(arr.slice(i + 1))];
}
console.log(quickSort([10, 80, -30, -90, 40]))