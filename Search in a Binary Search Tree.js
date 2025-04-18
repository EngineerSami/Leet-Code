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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let current = root;

    while (current != null) {
        if (val == current.val) {
            return current;
        }
        else if (val < current.val) {
            current = current.left; 
        } 
        else {
            current = current.right; 
        }
    }
    return null;
};
// Time Complexity: O(h), where h is the height of the tree
// Space Complexity: O(1)