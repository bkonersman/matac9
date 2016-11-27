var sayings = [
    "You may delay",
    "Tell me and I forget",
    "It takes many good deeds",
    "Early to bed",
    "By failing to preparie",
    "An investment in knowledge",
    "Well done is better than well said"
    ];

    var interval = setInterval(function(){
        var i = Math.floor(Math.random() * sayings.length);
        process.stdout.write(`${sayings[i]} \n`);
    },1000);

    process.stdin.on('data', function(data){
        console.log(`STDIN Data Received -> ${data.toString().trim()}`);
        clearInterval(interval);
        process.exit();

    });