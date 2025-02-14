import java.lang.classfile.components.ClassPrinter.ListNode;

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null) {
            return head; 
        }

        int count = 0;
        ListNode current = head;
        while (current != null) {
            current = current.next;
            count++;
        }

        if (count == n) {
            return head.next; 
        }

        current = head;
        int counter = count - n - 1; 
        while (counter > 0) {
            counter--;
            current = current.next;
        }

        current.next = current.next.next; 

        return head; 
    }
}
// Time: O(N)
// Space: O(1)