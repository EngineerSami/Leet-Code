/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function getHeight(node) {
        if (node === null) return 0;

        let left = getHeight(node.left);
        if (left === -1) return -1; 

        let right = getHeight(node.right);
        if (right === -1) return -1; 
        
        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    
    return getHeight(root) !== -1;
};
// Time Complexity: O(n)
// Space Complexity: O(n)