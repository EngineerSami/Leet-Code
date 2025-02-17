/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num; 
    }
    
    return result;
};

// Time complexity: O(n)
// Space complexity: O(1)