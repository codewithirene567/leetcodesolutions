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

//Alternate way I found to solve solved below:
var runningSum = function(nums) {
    let answer=[];
    let start=0;
   for(let i=0;i<nums.length;i++){
    start=start+nums[i];//start is assigned to adding the value of whatever number 
    //we are on plus the starting value originally or previously each time
    //the loop runs
      arr.push(start);
      //every time start is increasing we push that into an array
       console.log(answer)
       //the console.log looks like this
    // [ 1 ]
    // [ 1, 2 ]
    // [1, 2, 3 ]
   }
   return answer;   
};
