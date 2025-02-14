class Solution {
    public int romanToInt(String s) {

        String roman = "IVXLCDM";
        int[] values = {1, 5, 10, 50, 100, 500, 1000};
        int lastRoman = s.charAt(s.length() - 1);
        int result = values[roman.indexOf(lastRoman)];

        for (int i = 0; i < s.length() - 1; i++) {

            if (values[roman.indexOf(s.charAt(i))] < values[roman.indexOf(s.charAt(i + 1))]) {
                result -= values[roman.indexOf(s.charAt(i))];
            } else {
                result += values[roman.indexOf(s.charAt(i))];
            }

        }

        return result;
    }
    
}
// Time: O(N)
// Space: O(1)