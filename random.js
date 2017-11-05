function RandWord(random) {
    
        this.ReturningWord = function(){        
          return random;
    
        }
      };
      
    

var trying = new RandWord(random);

console.log(trying.ReturningWord());


module.exports = RandWord;