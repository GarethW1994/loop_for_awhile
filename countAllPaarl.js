var countAllPaarl = function(regNum) {
    var regNumsplit = regNum.split(',');

    var newList = [];

    var paarlList = [];

    for (var i = 0; i < regNumsplit.length; i++)   {

        newList.push(regNumsplit[i]);

        if (regNumsplit[i].startsWith('CJ')) {

          paarlList.push(newList[i]);
        }

    }



   return paarlList.length;
}

const assert = require('assert');

assert.equal(countAllPaarl('CA 345-155,CJ 555-555,CL 345 789,CJ 444-444'), 2);

console.log(countAllPaarl('CA 345-155,CJ 555-555,CL 345 789,CJ 444-444'));
