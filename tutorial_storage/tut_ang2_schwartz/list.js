var fs = require("fs");


// // this is the syncrhonous version, which will stop all other node processes until completes this one. Usually, bad.

//var files = fs.readdirSync('./lib');

//console.log(files);

// //this is the asynchronouos verious.

fs.readdir('./lib', function (err, files) {
    if (err) {
        throw err;

    }
    console.log(files);
});

console.log("Reading Files...");