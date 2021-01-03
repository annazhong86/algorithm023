/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k){
    for(let i = 0; i < k; i++){
        let prev = nums[nums.length - 1];
        for(let j = 0; j < nums.length; j++){
            let temp = nums[j];
            nums[j] = prev;
            prev = temp;
        }
    }
};