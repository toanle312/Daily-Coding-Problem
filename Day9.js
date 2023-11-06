const solution = (nums) => {
  /**
   * @param {number[]} nums
   * @return {number}
  */
  var rob = function (nums) {
    return rob_helper(nums, nums.length - 1);
  };

  const memo = {};
  var rob_helper = function (nums, i) {
    if (i < 0) {
      return 0;
    }
    if (memo[i] !== undefined) {
      return memo[i];
    }
    const result = Math.max(rob_helper(nums, i - 2) + nums[i], rob_helper(nums, i - 1));
    memo[i] = result;
    return result;
  }
}


console.log(solution([2, 7, 9, 3, 1]));