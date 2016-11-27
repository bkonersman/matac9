/*var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, EventEmitter);*/

var Person = require("./lib/Person");


var ben = new Person("Ben Franklin");
var george = new Person( "George Washington")
ben.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});
ben.emit('speak', "You may delay, but time will not.");

george.on('speak', function(said){
    console.log(`${this.name} -> ${said}`);
});

george.emit('speak',"It is far better to be alone than to be in bad company.");
