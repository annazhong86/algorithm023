var cliambStairs = function(n){
    let q = 0, p = 0, r = 1;
    for(let i = 0; i < n ; i++){
        p = q;
        q = r;
        r = q + p;
    }

    return r;
}