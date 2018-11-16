/**
 * @description https://leetcode.com/problems/shifting-letters/
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    var zero = 'a'.codePointAt(0);
    var reverseshifts = shifts.reverse();
    var shift = 0;
    return String.fromCodePoint(...Array.prototype.slice.call(S)
        .reverse()
        .map(function(val, ind) {
            shift += reverseshifts[ind];
            return (val.codePointAt(0) - zero + shift) % 26 + zero;
        }).reverse());
};
