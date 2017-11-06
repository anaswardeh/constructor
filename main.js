//require inquirer
var inquirer = require('inquirer');

//require objects/exports
var Word = require('./word.js');

var Rwg = require('random-word-generator');
const grw = require('geta-random-word')
var wd = require("word-definition");
var clc = require('cli-color');
grw(randomWord => random = randomWord);
var random;


console.log("-----------------------------");
console.log("Welcome to Hangman!");
console.log("The level of this game is set to Expert");
console.log(clc.red("Please Guess the First Letter"));
console.log("-----------------------------");

play = {
    randomWord: [random.toLowerCase()],
    guessesLeft: 10,
    word: '',



    game: function (word) {

        this.reset();
        this.word = new Word(this.randomWord[Math.floor(Math.random() * this.randomWord.length)]);
        this.word.addLetter();
        this.askLetter();
    },




    reset: function () {
        this.guessesLeft = 10;
    },



    askLetter: function () {

        var that = this;

        inquirer.prompt([{
            type: "input",
            name: "letter",
            message: "\nGuess a letter!"
        }]).then(function (choice) {
            console.log("\nYou guessed: " + choice.letter.toLowerCase());
        
            var totalSum = that.word.charaChecker(choice.letter.toLowerCase());

            if(totalSum == 0){
                console.log("WRONG!");
                console.log(that.word.returnFullWord());
                that.guessesLeft--;

            }else{
                console.log("CORRECT!");
                console.log(that.word.returnFullWord());

            if(that.word.findWord()){
                console.log("You won!");
                console.log("-----------------------------");
                
                wd.getDef(random, "en", null, function (definition) {
                    console.log(clc.red(definition.definition));
                    console.log("\n");
                });

                return;
                
            }
        }


        console.log("Guesses remaining: " + that.guessesLeft);
        console.log("-------------------");
        
        if ((that.guessesLeft > 0) && (that.word.won == false)) {
            that.askLetter();


        } else if (that.guessesLeft == 0) {
            console.log("Game over. Correct Word ", that.word.character);

            wd.getDef(random, "en", null, function (definition) {
                console.log(clc.red(definition.definition));
                console.log("\n");
            });

        } else {
            console.log(that.word.returnFullWord());
        }


    });

}


};


play.game();
