/**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

 */

 /**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
   // console.log("TreeNode(" + val + ")");
     this.val = val;
     this.left = this.right = null;
 }

 function printTree(tree) {
    //console.log("printTree()");
    if (tree === null) {
      console.log("printTree()--> null");
        return null;
    }
    console.log(tree);
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(tree) {
    let left = 1;
    let right = 1;

    // at the end
    if(tree == null) {
        return 0;
    }

    left += maxDepth(tree.left);
    right += maxDepth(tree.right);
    
    return (left < right) ? right : left;
};

// t1 = [1,3,2,5];
let t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);

// t2 = [2,1,3,null,4,null,7]
let t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.left = new TreeNode(null);
t2.left.right = new TreeNode(4);
t2.right.left = new TreeNode(null);
t2.right.right = new TreeNode(7);

// t2 = [8,1,3,null,4,null,7, 16, 3, 2, 1]
let t3 = new TreeNode(2);
t3.left = new TreeNode(1);
t3.right = new TreeNode(3);
t3.left.left = new TreeNode(null);
t3.left.right = new TreeNode(4);
t3.right.left = new TreeNode(null);
t3.right.right = new TreeNode(7);

t3.left.right.left = new TreeNode(4);
t3.left.right.right = new TreeNode(2);

t3.right.right.left = new TreeNode(4);
t3.right.right.right = new TreeNode(null);


console.log('T1 ==>  ');
printTree (t1);
console.log('T2 ==>  ');
printTree(t2);
console.log('T3 ==>  ');
printTree(t3);


console.log("max depth t1 ==> " + maxDepth(t1));
console.log("max depth t2 ==> " + maxDepth(t1));
console.log("max depth t3 ==> " + maxDepth(t3));