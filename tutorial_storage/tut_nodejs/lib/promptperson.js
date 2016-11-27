var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
    name:'',
    sayings: []
};


rl.question("what is the name of a real person?", function(answer){

    realPerson.name = answer;


    rl.setPrompt(`What would ${realPerson.name} say`);
    //console.log(answer);
    rl.prompt();
    rl.on('line', function (saying){
        if (saying.toLowerCase().trim() === 'exit'){
            rl.close();
        } else {

        realPerson.sayings.push(saying.trim());
        rl.setPrompt(` What else would ${realPerson} say? ('exit' to leave)`);
        rl.prompt();
        //console.log(saying.trim());
        };
    });
})

rl.on('close', function() {

    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
})