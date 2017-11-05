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



function Main(){

    this.play = function(){
        
        //Randomizing a new word.
        this.wordBank();
        this.guessesLeft = 10;
        
        //Reset Guesses Left.
        this.currentWrd = null

        this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();
        
    }

    this.wordBank =function(){
        grw(randomWord =>  random = randomWord);
        var random = random.charAt(0).toUpperCase() + random.slice(1);
        console.log(random);
        this.askLetter(random);
    }

    //ask for the letter of the word.
    this.askLetter = function(wordToGuess){
        inquirer.prompt([{
            type: "input",
            name: "letter",
            message: "Enter a letter: "
        }]).then(function(answer){

            //var chcker = new Word
        })
    }
    this.checker = function(userGuess, wrd){
        console.log(userGuess);
        console.log(wrd);   
    }
}



var game = new Main();

game.play();