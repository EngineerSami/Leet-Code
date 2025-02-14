class Solution:
  def tribonacci(self, n: int) -> int:
    if n < 2:
      return n

    TN = [0, 1, 1]

    for _ in range(3, n + 1):
      TN[0], TN[1], TN[2] = TN[1], TN[2], sum(TN)

    return TN[2]

# Time: O(n)
# Space: O(1)