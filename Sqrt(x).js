var mySqrt = function(x) {
    if (x === 0) return 0;
    
    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid; 
        } else if (mid * mid < x) {
            ans = mid; 
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans; 
};
// Time complexity: O(log(n))
// Space complexity: O(1)