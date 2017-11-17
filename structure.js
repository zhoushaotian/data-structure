/**
 * 单向链表节点
 * 
 * @class ListNode
 */
class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next | null;
    }
    /**
     * 翻转链表节点
     * 
     * @memberof ListNode
     */
    reverse(head) {
        let pre = null;
        let temp = null;
        while (head) {
            temp = head.next;
            head.next = pre;
            pre = head;
            head = temp;
        }
        return pre;
    }
}
/**
 * 双向链表节点
 * 
 * @class DListNode
 */
class DListNode {
    constructor(value, pre, next) {
        this.value = value;
        this.pre = pre | null;
        this.next = next | null;
    }
    reverse(head) {
        
    }
}
