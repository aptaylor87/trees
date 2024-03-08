/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }

  let queue = [{ node: this.root, depth: 1 }];

  while (queue.length > 0) {
      let { node, depth } = queue.shift();

      if (!node.left && !node.right) {
          return depth;
      }

      if (node.left) {
          queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right) {
          queue.push({ node: node.right, depth: depth + 1 });
      }
  }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }

  let queue = [{ node: this.root, depth: 1 }];

  while (queue.length > 0) {
      let { node, depth } = queue.shift();

      if (!node.left && !node.right) {
          return depth;
      }

      if (node.left) {
          queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right) {
          queue.push({ node: node.right, depth: depth + 1 });
      }
  }

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0

    // Helper function to perform depth-first traversal
    function dfs(node) {
        if (!node) {
            return 0;
        }

        // Recursively calculate the sum of left and right subtrees
        let leftSum = Math.max(0, dfs(node.left)); // Ignore negative sums
        let rightSum = Math.max(0, dfs(node.right)); // Ignore negative sums

        // Update max sum by considering the current node and its children
        max = Math.max(max, node.val + leftSum + rightSum);

        // Return the maximum sum achievable from the current node
        return node.val + Math.max(leftSum, rightSum);
    }

    // Start the depth-first traversal from the root
    dfs(this.root);

    return max;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLargerValue = null;

    // Helper function to perform in-order traversal
    function inorder(node) {
        if (!node) {
            return;
        }

        // Traverse left subtree
        inorder(node.left);

        // Check if current node's value is larger than lowerBound
        if (node.val > lowerBound) {
            // Update nextLargerValue if it's null or the current node's value is smaller
            if (nextLargerValue === null || node.val < nextLargerValue) {
                nextLargerValue = node.val;
            }
        }

        // Traverse right subtree
        inorder(node.right);
    }

    // Start the in-order traversal from the root
    inorder(this.root);

    return nextLargerValue;
  }

  // /** Further study!
  //  * areCousins(node1, node2): determine whether two nodes are cousins
  //  * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
