var runningSum = function(nums) {
    for(let i = 1 ; i < nums.length ; i++) {
        nums[i] = nums[i] + nums[i-1];
    }
    return nums;
};
//if we are given an array of nums we are trying to defined a running sum
//of the array like this: Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].