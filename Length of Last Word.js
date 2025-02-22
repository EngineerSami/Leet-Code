var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length - s.lastIndexOf(" ") - 1;
};

// Time complexity: O(n)
// Space complexity: O(1)
