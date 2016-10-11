const assert = require('assert');

//var i = 0;
var array = ['Shopping List: *1x bread *6x hotdog rolls *2x tubs of margarine'];

var shoppingList = function(myList) {
    var viewList = myList.split(',');
    var newList = [];

   for (var i = 0; i < viewList.length; i++) {
      console.log(viewList[i]);
    }

  /*  while(i < viewList.length) {
      i++;
      console.log(viewList[i]);
    }*/

};
//console.log(shoppingListName);
shoppingList('Shopping List:,*1x bread,*6x hotdog rolls,*2x tubs of margarine');
