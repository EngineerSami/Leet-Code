var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    
    return result;
};

// Time complexity: O(n)
// Space complexity: O(n)