////////////////////longestWord function/////////////////////////////
function longest_Word(sentence) {
      var  splitSentence = sentence.split(" ");
      var keepSentence = [];
      var getMax = Math.max(parseInt(splitSentence.length));
      var longestWord;

      for (var y = 0; y < splitSentence.length; y++ ) {
          keepSentence.push(splitSentence[y]);

          if (keepSentence[y].length > getMax)
          longestWord = keepSentence[y];
      }


      return 'The longest word is: ' + longestWord;
}

///////////////////////shortestWord functin//////////////////////////
function shortest_Word(sentence) {
    var  splitSentence = sentence.split(" ");
    var getMax = Math.max(parseInt(splitSentence.length));

    var keepSentence = [];
    var shortestWord;


    for (var i = 0; i < splitSentence.length; i++) {
      keepSentence.push(splitSentence[i]);

      if (keepSentence[i].length < getMax){
        shortestWord = keepSentence[i];
      }
    }

    return 'The shortest word is: ' + shortestWord;
}

///////////////////////get sum of sentence//////////////////////////
function get_WordsLength(sentence) {
  var replaceSpaces = sentence.replace(/\s/g, '');
  var splitSentence = replaceSpaces.split('');

  var array = [];
  var wordsLength = 0;


 for (x = 0; x < splitSentence.length; x++) {
    array.push([x]);
  }

  while (array.length > wordsLength) {
    if (wordsLength === array.length) {
      break;
    }
    else {
      wordsLength++;
    }
  }

  return 'The sum of the words is: ' + wordsLength;
}


//Test function
const assert = require('assert');

var testLongestWord = (longest_Word('I am a ninja'));
var testShortestWord = (shortest_Word('I am a monster'));
var sumOfWords = (get_WordsLength('The red door'));

deepEqual = (testLongestWord, 'The longest word is: ' + 'ninja');
deepEqual = (testShortestWord, 'The shortest word is: ' + 'a');
deepEqual = (sumOfWords, 'The sum of the words is: ' + 10);

//log longest word
console.log(longest_Word('I am coding with loops'));
//log shortest word
console.log(shortest_Word('I am a ninja'));
//log the sum of the words
console.log(get_WordsLength('This is me'));
