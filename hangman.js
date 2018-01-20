var Word = require("./word.js");
var inquirer = require("inquirer");

var nextWord = new Word();

inquirer.prompt([{
    type: "confirm",
    name: "playGame",
    message: "Would you like to play some hangman?",
    default: true
}]).then(function (user) {

});