const twoSum = (nums, target) => {
    const prevNums = {};

    for(let i = 0; i < nums.length; i++){
        const curNum = nums[i];
        const targetNum = target - curNum;
        const targetNumIndex = prevNums[targetNum]
        if(targetNumIndex !== undefined){
            return [targetNumIndex, i];
        } else {
            prevNums[curNum] = i;
        }
    }
}