////////////////////longestWord function/////////////////////////////
function longest_Word(sentence) {
    var splitSentence = sentence.split(" ");
    var keepSentence = [];
    var getMax = Math.max(parseInt(splitSentence.length));
    var longestWord;

    for (var y = 0; y < splitSentence.length; y++) {
        keepSentence.push(splitSentence[y]);

        if (keepSentence[y].length > getMax)
            longestWord = keepSentence[y];
    }


    return longestWord;
}

///////////////////////shortestWord functin//////////////////////////
function shortest_Word(sentence) {
    var splitWord = sentence.split(' ');

    var emptArr = [];

    var short = splitWord[0].length;

    var shortestWord = ' ';

    for (var i = 0; i < splitWord.length; i++) {
      emptArr.push(splitWord[i]);

      if (emptArr[i].length < short) {
          shortestWord = emptArr[i];
      }
    }

    return shortestWord;
  }


///////////////////////get sum of sentence//////////////////////////
function get_WordsLength(sentence) {
    //Removes the spaces in between the sentence
    //so that it's one long continous string
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
        } else {
            wordsLength++;
        }
    }

    return wordsLength;
}


//Test function
const assert = require('assert');

var testLongestWord = (longest_Word('I am a ninja'));
//var testShortestWord = (shortest_Word('I am a monster'));
var sumOfWords = (get_WordsLength('The red door'));

assert.equal(testLongestWord, 'ninja');
assert.equal(sumOfWords, 10);

//log longest word
console.log(longest_Word('I am coding with loops'));
//log shortest word
console.log(shortest_Word('One man was walking to the mall'));

//log the sum of the words
console.log(get_WordsLength('This is me'));
