/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const values = [];
    
    const inOrder = (node) => {
        if (node == null) return;
        inOrder(node.left);
        values.push(node.val);
        inOrder(node.right);
    };
    
    inOrder(root);
    
    let min = Infinity;
    for (let i = 1; i < values.length; i++) {
        min = Math.min(min, values[i] - values[i - 1]);
    }
    
    return min;
};
// Time Complexity: O(n)
// Space Complexity: O(n) 