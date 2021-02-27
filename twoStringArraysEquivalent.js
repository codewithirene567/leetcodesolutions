var arrayStringsAreEqual = function(word1, word2) {
    console.log(word1.join(""))
    if(word1.join("") == word2.join("")){
        return true
    } else {
        return false
    }
   
};

//it could also be done like this to optimize the solution:

var arrayStringsAreEqual = function(word1, word2) {
   return word1.join("") === word1.join("")
};