/**
 * @description https://leetcode.com/problems/binary-watch/
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var res = [];
    for (var hour = 0; hour < 12; hour++) {
        for (var minute = 0; minute < 60; minute++) {
            var count = Array.prototype.slice
                .call(hour.toString(2) + minute.toString(2))
                .reduce((sum, val) => sum += +val, 0);
            if (count == num) res.push(`${hour}:${minute>9? '':'0'}${minute}`);
        }
    }
    return res;
};
