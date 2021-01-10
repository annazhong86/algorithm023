var preorderTraversal = function(root){
    const list = [];
    const stack = [];

    if(root){
        stack.push(root);
    }

    while(stack.length > 0){
        const curNode = stack.pop();
        list.push(curNode.val);

        if(curNode.right !== null){
            stack.push(curNode.right);
        }

        if(curNode.left !== null){
            stack.push(curNode.left);
        }
    }

    return list;
}