import java.lang.classfile.components.ClassPrinter.ListNode;

class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false; 
        }

        else{
        ListNode slow = head;
        ListNode fast = head.next;

        while (fast == null || fast.next == null) {
            if (slow == fast) {
                return true; 
            }
            else{
                slow = slow.next;
                fast = fast.next.next;
            }
        }
        }

        return false; 
    }
}
// Time: O(N)
// Space: O(1)
