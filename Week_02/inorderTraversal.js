var inorderTraversal = function(root){
    const res = [];
    const stk = [];

    while(root || stk.length){
        while(root){
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}