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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const values = [];
    
    const preOrder = (node) => {
        if (node == null) return;
            values.push(node.val); 
            preOrder(node.left);
            preOrder(node.right);
        };
    
    preOrder(root);
    return values;
};
// Time Complexity: O(n)
// Space Complexity: O(n)  // in the worst case, we need to store all nodes in the stack.