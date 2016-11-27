var questions = [
    "What is your name?",
    "What is your hobby?",
    "What is your fav programming language?"];

    var answers = [];

    function ask(i) {
        process.stdout.write(`\n\n\n\n ${questions[i]}`);
        process.stdout.write("  >  ");
    }

    process.stdin.on('data', function(data) {
        answers.push(data.toString().trim());
        if(answers.length < questions.length){
            ask(answers.length);
        } else { process.exit();
        }
       // process.stdout.write('\n' + data.toString().trim() + '\n');
    });

    ask(0);