var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
};
// Time complexity: O(n + m)
// Space complexity: O(n + m) where n is the length of list1 and m is the length of list2