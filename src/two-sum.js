/**
 * @description https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var val = nums[i];
        if (map.has(val)) {
            return [map.get(val), i];
        }
        var diff = target - val;
        map.set(diff, i);
    }
};
