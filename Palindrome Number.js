var isPalindrome = function(x) {
    let str = x.toString();
    return str === str.split('').reverse().join('');
};
// Time complexity: O(n)
// Space complexity: O(n)