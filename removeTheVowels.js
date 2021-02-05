var removeVowels = function(s) {
    //S.replace(/[aeiou]/g,'');
    //this is the one line solution above
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    //vowels are defined
    console.log(s, "s")
    //filter returns a new array only if the condition is true
    //the condition below is saying that if it not a value and it includes
    //the string then join it and return the substring joined together
    //as a new string, this will not contain the vowels
    return s.split('').filter(s => !vowels.includes(s)).join('');
};