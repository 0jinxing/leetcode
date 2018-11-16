/**
 * @description https://leetcode.com/problems/powx-n
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) return 1;
    if (n == 1) return x;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n % 2) return x * myPow(x * x, parseInt(n / 2));
    return myPow(x * x, parseInt(n / 2));
};
