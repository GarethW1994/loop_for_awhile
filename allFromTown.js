var allFromTown = function(fromWhere, startString) {
  var splitReg = fromWhere.split(',');

//empty array
  var townList = [];
//arrays to be populated
  var newTownList = [];


    for (var p = 0; p < splitReg.length; p++) {
      townList.push(splitReg[p]);

      if (townList[p].includes(startString)) {
        newTownList.push(townList[p]);

      }
};

  return newTownList.join(',');
}

//Test function
const assert = require('assert');

var fromStellies = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL');


assert.deepEqual(fromStellies, 'CL 124,CL 345,CL 341');

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, '');


console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
