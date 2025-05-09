public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int[] merged = new int[m + n];
        int i = 0, j = 0, k = 0;
        
        while (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                merged[k++] = nums1[i++];
            } else {
                merged[k++] = nums2[j++];
            }
        }
        
        while (i < m) {
            merged[k++] = nums1[i++];
        }
        
        while (j < n) {
            merged[k++] = nums2[j++];
        }
        
        int mid = (m + n) / 2;
        if ((m + n) % 2 == 1) {
            return merged[mid];
        } else {
            return (merged[mid - 1] + merged[mid]) / 2.0;
        }
    }
}
// Time: O(M + N) where M and N are the lengths of the input arrays
// Space: O(M + N) where M and N are the lengths of the input arrays