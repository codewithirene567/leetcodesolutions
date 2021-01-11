function removeElement(nums, value) {
    let length = nums.length - 1
   while(length >= 0){
    if(nums[0] === val){
        nums.shift()
    } else {
        let temporary = nums.shift()
        nums.push(temporary)
    }
       length--
    }
    return nums.length
};