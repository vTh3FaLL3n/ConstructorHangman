var Word = require("./word.js");
var inquirer = require("inquirer");

var nextWord = new Word();

inquirer.prompt([{
    type: "confirm",
    name: "playGame",
    message: "Would you like to play some hangman?",
    default: true
}]).then(function (user) {
    if (user.playGame) {
        runGame();
    } else {
        console.log("Well fine then!");
    }
});

function runGame() {
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Guess a letter: "
    }]).then(function(guess){
        isCorrect(guess);
    });
}