var numberOfSteps  = function(num) {
    //is it even or odd
    //if it is even divide by 2 and make the counter go up
    //if it is odd then subtract 1 and make the counter go up
    
//     function isEven(value) {
// 	if (value%2 == 0)
// 		return true;
// 	else
// 		return false;
// }
    //used this to find out if it is even or not
    let steps = 0
   
    while(num>0){
    
    if (num%2 ==0){
       num = num/2
      
       //console.log(newNum, "if")
       steps++
    } else {
        num = num-1
         //console.log(newNum, "else")
        steps++
    } 
    
 }
    return steps 
    //while (newNum > 0)  


};
