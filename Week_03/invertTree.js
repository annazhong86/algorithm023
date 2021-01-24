var invertTree = function(root){
    if(root == null){
        return null;
    }

    let tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}