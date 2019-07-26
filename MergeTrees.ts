/*
 * Definition for a binary tree node.
 */ 
 function TreeNode(val) {
     console.log("TreeNode(" + val + ")");
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
/*
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }
   
    t1.val = t1.val + t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
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

console.log('T1 ==>  ');
printTree (t1);
console.log('T2 ==>  ');
printTree(t2);

let t3 = mergeTrees(t1, t2);
console.log('Merge T1 & T2 ==>  ');
printTree(t3);