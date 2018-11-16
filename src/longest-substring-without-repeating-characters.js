/**
 * @description https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var start = 0;
    var last = '';
    for (var i = 0; i < s.length;) {
        if (last.indexOf(s[i]) < 0) {
            last += s[i];
            max = Math.max(max, last.length);
            i++;
        } else {
            i = start + last.indexOf(s[i]) + 1;
            start = i;
            last = '';
        }
    }
    return max;
};
