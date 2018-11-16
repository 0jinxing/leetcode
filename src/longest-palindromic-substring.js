/**
 * @description https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var palindrome = '';
    var pre = '#' + Array.prototype.slice.call(s).join('#') + '#';
    for (var i = 0; i < pre.length; i++) {
        var offset = 0;
        while (i - offset >= 0 && i + offset < pre.length) {
            if (pre[i - offset] != pre[i + offset]) break;
            if (2 * offset + 1 > palindrome.length) {
                palindrome = pre.slice(i - offset, i + offset + 1);
            }
            offset++;
        }
    }
    return palindrome.replace(/\#/g, '');
};
