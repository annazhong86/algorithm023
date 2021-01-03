/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9A-Z]+/igm,"");
    s = s.toLocaleLowerCase();
    if(s.length > 0){
        let s_left = 0;
        let s_right = s.length-1;
        while(s_left < s_right){
            if (s[s_left] !== s[s_right]){
                return false;
            }
            s_left++;
            s_right--;
        } 
        return true;
    } else {
        return true;
    }

};