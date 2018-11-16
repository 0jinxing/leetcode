/**
 * @description https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;
    var rows = Array(numRows).fill('');
    var offset = -1;
    var indexRows = 0;
    for (var i = 0; i < s.length; i++) {
        if (indexRows % (numRows - 1) == 0) offset = (offset == -1 ? 1 : -1);
        rows[indexRows] += s[i];
        indexRows += offset;
    }
    return rows.join('');
};
