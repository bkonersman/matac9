var path = require('path');
var util = require('util');
var v8 = require('v8');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'wwww', 'files', 'uploads');
util.log(dirUploads);
util.log(v8.getHeapStatistics());

rl.question("What is the name of a real person?", function(answer) {
    console.log(answer);
})