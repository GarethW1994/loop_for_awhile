var allPaarl = function(regNum) {
    var regNumsplit = regNum.split(',');

    var newList = [];

    var paarlList = [];

    for (var k = 0; k < regNumsplit.length; k++) {
      newList.push(regNumsplit[k]);

        if (newList[k].startsWith('CJ')) {
            paarlList.push(newList[k]);
        }
  }

//Add comma between data
    var allPaarl = paarlList.join(' , ');

   return allPaarl;
}
//test function
const assert = require('assert');


assert.equal(allPaarl('CA 345-155,CJ 555-555,CJ 345 789'), 'CJ 555-555 , CJ 345 789');
//assert.equal(allPaarl('CA 345-155,CY 555-555,CL 345 789'), 'No Paarl Reg');


//Dispay
console.log(allPaarl('CA 345-155,CJ 555-555,CJ 345 789'));
//console.log(allPaarl('CA 345-155,CY 555-555,CL 345 789'));
