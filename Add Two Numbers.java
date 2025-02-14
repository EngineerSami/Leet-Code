import java.lang.classfile.components.ClassPrinter.ListNode;

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode result = new ListNode(0);
    ListNode current = result;
    int carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        int x;
        if (l1 != null) {
            x = l1.val;
        } 
        else {
            x = 0;
        }

        int y;
        if (l2 != null) {
            y = l2.val;
        }           
        else {
            y = 0;
        }

        int sum = x + y + carry;
        current.next = new ListNode(sum % 10);
        carry = sum / 10;
        current = current.next;

        if (l1 != null) {
        l1 = l1.next;
        }
        if (l2 != null) {
        l2 = l2.next;
        }
    }

    return result.next;
}
}
// Time: O(N)
// Space: O(1)