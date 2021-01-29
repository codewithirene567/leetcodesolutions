function(accounts) {
    let result = []
    for(let i = 0; i <accounts.length; i++){
        result.push(accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue))
        
    }
    return Math.max(...result)
};
//for this question I am given an account array where there are 3 accounts in an array
//I am supposed to find out by adding each of the 3 numbers together,
//which number has the highest amount of money