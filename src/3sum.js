/**
 * @description https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const map = new Map();
    const target = 0;
    nums.forEach(val => map.set(target - val, [val]));
    for (let i of nums) {

    }
};
