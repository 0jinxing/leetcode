/**
 * @description https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0) {
    if (nums.length <= 2) return Math.max(...nums, 0);
    var dp = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) {
        dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]));
    }
    return dp.pop();
};
