var isAnagram = function(s, t){
    if(s.length != t.length){
        return false;
    }

    const alpha = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        alpha[s.codePointAt(i) - 'a'.codePointAt(0)]++;
        alpha[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    }

    for(let j = 0; j < 26; j++){
        if(alpha[j] != 0){
            return false;
        }
    }

    return true;
}