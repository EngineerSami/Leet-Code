from typing import List


class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(1 for hour in hours if hour >= target)
#Time complexity: O(n)
#Space complexity: O(1)