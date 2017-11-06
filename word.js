var Letter = require("./letter.js");

function Word(character) {

  this.character = character;
  this.guesses = [];
  this.won = false;

  //Get the letter and push it into the array that comprises all of the correct letters.
  this.addLetter = function () {
    for (var i = 0; i < this.character.length; i++) {
      this.guesses.push(new Letter(this.character[i]));
    }
  };

  //After adding the letter, we need to check if it matches one of the word's letters.
  this.charaChecker = function (checker) {
    var counter = 0;

    for (var i = 0; i < this.guesses.length; i++) {

      if (this.guesses[i].char == checker) {
        this.guesses[i].show = true;
        counter++;
      }
    }
    return counter;
  };

  //Putting the array in one word and return it.
  //Joining String characters together after the word is complete
  this.returnFullWord = function () {
    var joinString = '';
    for (i = 0; i < this.guesses.length; i++) {
      joinString += this.guesses[i].ReturningLetter();
    }
    return joinString;
  };

  //After the whole word is found, it will show all letters
  this.findWord = function () {
    //Winning means all characters are shown.
    this.won = this.guesses.every(function (let) {
      //Show all letters
      return let.show;
    });
    return this.won;
  };
};

module.exports = Word;
