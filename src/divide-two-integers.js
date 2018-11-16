/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor == 0 && dividend >= 0) return Number.POSITIVE_INFINITY;
    else if (divisor == 0) return Number.NEGATIVE_INFINITY;
    if (dividend == 0) return 0;

    var positive = dividend >= 0 && divisor >= 0 || dividend <= 0 && divisor <= 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend < divisor) return 0;

    var ans = 1;
    var sum = divisor;
    var pool = new Map();

    while (sum <= dividend) {
        if (ans << 1 <= 0 || sum << 1 <= 0) break;
        if (sum << 1 > dividend) break;
        pool.set(ans, sum);
        ans <<= 1;
        sum <<= 1;
    }
    var keys = [...pool.keys()].sort((val1, val2) => val1 - val2).reverse();
    for (var i = 0; i < keys.length;) {
        var k = keys[i];
        if (sum == dividend) break;
        if (sum + pool.get(k) <= dividend) {
            sum += pool.get(k);
            ans += k;
        } else i++;
    }
    ans = positive ? ans : -ans;
    return Math.max(Math.min(ans, 2147483647), -2147483648)
};
