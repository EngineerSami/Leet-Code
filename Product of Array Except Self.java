import java.util.Arrays;

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];
        Arrays.fill(answer, 1);

        int leftAnswer = 1;
        for (int i = 0; i < n; i++) {
            answer[i] = leftAnswer;
            leftAnswer *= nums[i];
        }

        int rightAnswer = 1;
        for (int i = n - 1; i >= 0; i--) {
            answer[i] *= rightAnswer;
            rightAnswer *= nums[i];
        }

        return answer;
    }
}
// Time: O(N)
// Space: O(1)