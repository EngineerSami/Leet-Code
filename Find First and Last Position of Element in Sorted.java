class Solution {
    public int[] searchRange(int[] nums, int target) {
        int firstone = -1;
        int secondone = -1;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                if (firstone == -1) {
                    firstone = i;
                }
                secondone = i;
            }
        }

        return new int[]{firstone, secondone};
    }
}
// Time: O(N)
// Space: O(1)