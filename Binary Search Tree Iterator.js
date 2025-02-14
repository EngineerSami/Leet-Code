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
 */
var BSTIterator = function(root) {
    this.stack = [];
    this._pushLeft(root);
};

/**
 * Helper function to push all left children of a node to the stack
 * @param {TreeNode} node
 */
BSTIterator.prototype._pushLeft = function(node) {
    while (node !== null) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // Pop the top node from the stack
    let node = this.stack.pop();
    
    // If the node has a right child, push all its left children onto the stack
    if (node.right !== null) {
        this._pushLeft(node.right);
    }
    
    // Return the next smallest value
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    // Check if there are any nodes left in the stack
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root);
 * var param_1 = obj.next();
 * var param_2 = obj.hasNext();
 */
// Time Complexity: O(1) for both next and hasNext
// Space Complexity: O(h), where h is the height of the tree