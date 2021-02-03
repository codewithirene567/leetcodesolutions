var subtractProductAndSum = function(n) {
    //separate the digits
    //find the product
    //find the sum
    //subtract the sum from the product
const str = n.toString()
    //converting to a string so that we can use for of on it
    let product = 1
    let sum = 0
     
    for(const item of str) {
        console.log(item, "Number")
        product *= Number(item)
        sum += Number(item)
        //When used as a function, Number(value) converts a string or other value to the Number type.
    }
    
    return product - sum

    //product *= item	product = item * product
};