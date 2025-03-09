var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    function buildBST(left, right) {
        if (left > right) return null;
        
        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);

        return root;
    }

    return buildBST(0, nums.length - 1);
};

// Time complexity: O(n)
// Space complexity: O(n)