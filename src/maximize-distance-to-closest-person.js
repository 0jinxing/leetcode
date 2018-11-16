/**
 * @description https://leetcode.com/problems/maximize-distance-to-closest-person/
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var ans = 0;
    var count = 0;
    var start = 0;
    for (var i = 0; i < seats.length; i++) {
        if (!seats[i]) {
            count++;
        } else {
            start = i + 1;
            count = 0;
            continue;
        }
        if (start == 0 || i == seats.length - 1) ans = Math.max(ans, count);
        else ans = Math.max(ans, Math.ceil(count / 2));
    }
    return ans
};
