/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var sumHeadList = new ListNode(0);
    var sumHead = sumHeadList;
    while (l1 || l2) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;
        var temp = val1 + val2 + carry;
        carry = parseInt(temp / 10);
        temp %= 10;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        sumHead.next = new ListNode(temp);
        sumHead = sumHead.next;
    }
    if (carry) sumHead.next = new ListNode(carry);
    return sumHeadList.next;
};
