from typing import Optional


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]: # type: ignore
        if not head:  
            return head
        
        current = head
        while current.next:  
            if current.val == current.next.val:
                current.next = current.next.next  
            else:
                current = current.next  
        return head
#Time complexity: O(n)
#Space complexity: O(1)