function firstPaarl(regNum) {
    var regNumsplit = regNum.split(',');

    var newList = [];

    var paarlList = [];

    //for - loop to loop through the split strings
    for (var i = 0; i < regNumsplit.length; i++) {
        //push them to new list empty array
        newList.push(regNumsplit[i]);

        //Check if the array contains strings that starts with 'CJ'
        if (newList[i].includes('CJ')) {
            //Push the strings from paarl to new array
            paarlList.push(newList[i])
        }
    }

    //Remove brackets in array
    var list = paarlList.join('[]');
    //Return array as string
    return list;
}

//Test function
const assert = require('assert');

assert.equal(firstPaarl('CA 345-155,CA 555-555,CJ 345 789'), 'CJ 345 789');

//Display
console.log(firstPaarl('CA 345-155, CA 555-555, CJ 345 789'));
