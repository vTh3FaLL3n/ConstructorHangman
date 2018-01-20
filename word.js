var Letter = require("./letters.js");

var Word = function () {
    this.wordBank = ["Naruto Shippuden", "Dragon Ball Super", "Food Wars", "Black Clover", "Death Note", "Pokemon", "Boruto Naruto Next Generations"];
    this.random = Math.floor(Math.random() * this.wordBank.length);
    this.answer = this.wordBank[this.random];

    var getWord = new Letter(this.answer);
};

module.exports = Word;