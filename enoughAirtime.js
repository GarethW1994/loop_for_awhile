var enoughAirtime = function(usage, airtime) {
    var splitUsage = usage.split(',');

    const costPerCall = 1.88;
    const dataBundles = 12;
    const costSms = 0.75;
    var total = 0;

    var usageList = [];

    var sms = [];
    var call = [];
    var data = [];


    for (var i = 0; i < splitUsage.length; i++) {
      usageList.push(splitUsage[i]);

      if (usageList[i].includes('sms')) {
        sms.push(usageList['sms']);
      }
      else if (usageList[i].includes('call')) {
        call.push(usageList['call']);
      }
      else if (usageList[i].includes('data')) {
        data.push(usageList['data']);
      }
    }

    var totalPhoneBill = (call.length * costPerCall) + (sms.length * costSms) + (data.length * dataBundles);

    if (totalPhoneBill > airtime) {
      return 'Not enough Airtime';
    }
    else {
    total = airtime - totalPhoneBill;

    return 'R' + total.toFixed(2);
  }
}

const assert = require('assert');

var processAirtime = (enoughAirtime('call,call,call,data,sms,sms,call,data', 50));

assert.deepEqual(processAirtime, 'R' + 16.98);

console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50))
