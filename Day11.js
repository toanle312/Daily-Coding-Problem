/**
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
 */
const query = (set, s) => {
  set.sort();
  const result = []
  let left = 0, right = set.length - 1;

  while (set[left]?.slice(0, s.length) < s) left++;
  while (set[right]?.slice(0, s.length) > s) right--;

  while (left <= right) {
    result.push(set[left]);
    left++;
  }

  return result;


  // Dictionary way

  // const dictionary = {};
  // set.forEach(word => {
  //   let i = 0;
  //   let prefix = "";
  //   while (i < word.length) {
  //     prefix = prefix + word[i];
  //     if (dictionary[prefix]) {
  //       dictionary[prefix].push(word);
  //     }
  //     else dictionary[prefix] = [word];
  //     i++;
  //   }
  // })
  // return dictionary[s];
}

console.log(query(["a", "dog", "deer", "deal", "y", "z"], "de"));