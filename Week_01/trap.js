var trap = function(height){
    let sum = 0;
    let max_left = 0;
    let max_right = 0;
    let left = 1;
    let right = height.length - 2;
    
    for(let i = 1; i < height.length - 1; i++){
        if(height[left - 1] < height[right + 1]){
            max_left = Math.max(max_left, height[left-1]);
            let min = max_left;
            if(min > height[left]){
                sum = sum + (min - height[left]);
            }
            left++;
        } else {
            max_right = Math.max(max_right, height[right+1]);
            let min = max_right;
            if(min > height[right]){
                sum = sum + (min - height[right]);
            }
            right--;
        }
    }
    return sum;
}