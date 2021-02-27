var countConsistentStrings = function(allowed, words) {
    //make an empty array and 
    //for each letter in words array save it in a variable called word
    //then for every word make a variable for each of the letters in that word
    //now check if the following statement is not true:
    //if the allowed string includes a letter in each word then break
    //then check if the index of the word we are on is the same as the last index of word
    //if it is then push the word into the answer array
    //return how many items are in the answer array
	   
    let answer = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      for (let j = 0; j < word.length; j++) {
        const letter = word[j];
        if (!allowed.includes(letter)) break;
        else if (j === word.length - 1){
            answer.push(word)
        }
      }
    }
  
    return answer.length;
  };
