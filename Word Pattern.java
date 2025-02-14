class Solution {
    public boolean wordPattern(String pattern, String s) {

        String[] words = s.split(" ");
        char[] charArray = pattern.toCharArray();

        if (words.length != charArray.length) {
            return false;
        }

        String[] charToWord = new String[26]; 
        char[] wordToChar = new char[words.length];

        for (int i = 0; i < words.length; i++) {
            char c = charArray[i];
            String word = words[i];
            int charIndex = c - 'a'; 

            if (charToWord[charIndex] != null) {
                if (!charToWord[charIndex].equals(word)) {
                    return false; 
                }
            } else {
                for (int j = 0; j < i; j++) {
                    if (words[j].equals(word) && wordToChar[j] != c) {
                        return false; 
                    }
                }
                charToWord[charIndex] = word;
                wordToChar[i] = c;
            }
        }

        return true;
    }
}
// Time: O(N)
// Space: O(N)