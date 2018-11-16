/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this._dp = nums.reduce((sum, val, ind) => {
        sum.push(sum[ind] + val);
        return sum;
    }, [0]);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this._dp[j + 1] - this._dp[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
