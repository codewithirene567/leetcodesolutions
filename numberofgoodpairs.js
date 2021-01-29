function(nums) {
    let count = 0
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                count++
            }
        }
    }
    return count
};

var numIdenticalPairs = function(nums) {
    const map = {};
    let count = 0;
    nums.forEach(num => {
        if (map[num]) {
            count += map[num]; 
            map[num]++;
        } else {
            map[num] = 1;
            
        }
    })
    return count;
};

//in this problems a pair is good if nums[i] is equal to nums[j] and
//if the index of i is smaller than j
//return the number of good pairs from the array