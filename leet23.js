 Time complexity : O(N*log k) for k list
 Space complexity : O(log n) for n list
/* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    let arr = [], res = new ListNode(-1);
    
    lists.forEach(list => {
        let cur = list;
        while(cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    });
    
    let cur = res;
    arr.sort((a,b) => a - b)
        .forEach(n => {
        let temp = new ListNode(n);
        cur.next = temp;
        cur = cur.next;
    });
    return res.next;
};