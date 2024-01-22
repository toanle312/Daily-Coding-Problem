class MergeSort {
  constructor(arr) {
    this.array = arr;
  }

  cppIdea() {
    // JavaScript program for Merge Sort

    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    function merge(arr, l, m, r) {
      var n1 = m - l + 1;
      var n2 = r - m;

      // Create temp arrays
      var L = new Array(n1);
      var R = new Array(n2);

      // Copy data to temp arrays L[] and R[]
      for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

      // Merge the temp arrays back into arr[l..r]

      // Initial index of first subarray
      var i = 0;

      // Initial index of second subarray
      var j = 0;

      // Initial index of merged subarray
      var k = l;

      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        }
        else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }

      // Copy the remaining elements of
      // L[], if there are any
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }

      // Copy the remaining elements of
      // R[], if there are any
      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }

    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted
    function mergeSort(arr, l, r) {
      if (l >= r) {
        return;
      }
      var m = l + Math.floor((r - l) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
    }

    mergeSort(this.array, 0, this.array.length - 1)
    return this.array;
  }

  jsIdea() {
    // merge sort with JS shorten syntax
    const merge_js = (l_arr, r_arr) => {
      const result = [];

      while (l_arr.length && r_arr.length) {
        if (l_arr[0] < r_arr[0]) {
          result.push(l_arr[0]);
          l_arr.shift();
        }
        else {
          result.push(r_arr[0]);
          r_arr.shift();
        }
      }

      return [...result, ...l_arr, ...r_arr];
    }

    const mergeSort_js = (arr) => {
      if (arr.length < 2) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const l_arr = arr.slice(0, mid);
      const r_arr = arr.slice(mid);
      return merge_js(mergeSort_js(l_arr), mergeSort_js(r_arr));
    }

    return mergeSort_js(this.array)
  }
}

const arr = [8, -1, 0, 2, 3, -11, 9, 90, 22]
const mergeSort = new MergeSort(arr);

console.log(mergeSort.cppIdea());
console.log(mergeSort.jsIdea());



