const lengthOfLongestSubstringTwoDistinct = (s) => {
  const hashMap = {};

  let j = 0, n = s.length, count = 0, ans = 0, i = 0;

  while (j < n) {
    if (hashMap[s[j]] === undefined) {
      hashMap[s[j]] = 1;
      count++;
    }
    else {
      hashMap[s[j]] += 1;
    }
    j++;
    while (count > 2) {
      hashMap[s[i]] -= 1;
      if (hashMap[s[i]] === 0) {
        count--;
      }
      i++;
    }
    ans = Math.max(ans, j - i);
  }

  return ans;
}

const lengthOfLongestSubstringKDistinct = (s, k) => {
  const hashMap = {};

  let j = 0, n = s.length, count = 0, ans = 0, i = 0, subStr = "";

  while (j < n) {
    if (hashMap[s[j]] === undefined) {
      hashMap[s[j]] = 1;
      count++;
    }
    else {
      hashMap[s[j]] += 1;
    }
    j++;
    while (count > k) {
      hashMap[s[i]] -= 1;
      if (hashMap[s[i]] === 0) {
        count--;
      }
      i++;
    }
    ans = Math.max(ans, j - i);
    subStr = s.substring(i, j);
  }

  return [ans, subStr];
}

console.log(lengthOfLongestSubstringTwoDistinct('eceba'));
console.log(lengthOfLongestSubstringKDistinct('ecebaaa', 3));



