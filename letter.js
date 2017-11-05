// constructor function for creating character objects
function Letter(character) {

    //Store the Actual Letter
    this.char = character;

    //the default state of the letter before being guessed.
    this.show = false;
    

    this.ReturningLetter = function(){
      //returns true if show is false  and false if it's 
      //true statements, so the underscore can be shown or hid.
      return !(this.show) ? " _ " : this.char;

    }
  };
  
  //export the constructor

  module.exports = Letter;

