var inquirer = require("inquirer");

function Player(name, position, offense, defense, goodGame, badGame, printStats){

    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function(){
        var coinFlip = Math.floor(Math.random()*1.9)

        if (coinFlip = 0){
            this.offense = this.offense + 5
        }

        if (coinFlip = 1){
            this.defense = this.defense + 5
        }
    }
    this.badGame = function(){
        var coinFlip = Math.floor(Math.random()*1.9)
        if (coinFlip = 0){
            this.offense = this.offense - 5
        }

        if (coinFlip = 1){
            this.defense = this.defense - 5
        }
    }
    this.printStats = function(){
        console.log("Player Name: "+this.name);
        console.log("Player Position " +this.position);
        console.log("Player Offense " +this.offense);
        console.log("Player Defense "+this.defense);
    }
    
}

var playerArray = []
var counter = 0;
var gameplay = false;

function loopy() {

    if(counter <= 2){

    inquirer.prompt([
        {
          name: "name",
          message: "What is your player name?"
        }, {
          type: "list",
          message: "What is your  player's current position?",
          choices: ["Starter", "Sub"],
          name: "position"
        }, {
          name: "offense",
          message: "What is your player's offensive stats?"
        }, {
          name: "defense",
          message: "What is your player's defensive stats?"
        }
      ]).then(function(answers) {
        var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
        newPlayer.printStats();
        if (answers.position == "Starter"){
            
        }
        playerArray.push(newPlayer)

        counter++
        if (counter ==3){
            for(i=0; i<3; i++){
            playerStats = playerArray[i];

            playerStats.printStats()
            }
            gameplay = true;
            playGame()
        }
        loopy()
      });
    }
}

loopy()


var gameCounter = 0;
var teamScore = 0;

function playGame(){
    if (gameCounter <= 5){
        var randomOne = Math.floor(Math.random()*20)
        var randomTwo = Math.floor(Math.random()*20)
        
        
        var offensiveStat = 0;
        for (i=0; i<3; i++){
            tempOffense = parseInt(playerArray[i].offense);
            offensiveStat = parseInt(offensiveStat) + tempOffense;
        }
        if (randomOne < offensiveStat){
            teamScore++
        }
        var defensiveStat = 0;
        for (i=0; i<3; i++){
            tempDefense = parseInt(playerArray[i].defense);
            defensiveStat = parseInt(defensiveStat) + tempOffense;
        }
        if (randomTwo > defensiveStat){
            teamScore--
        }
     

    }
}



// Once all of the players have been created, print their stats.

// * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been 
// created and will do the following:

//   * Run 5 times. Each time the function runs:
//     * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
//       * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//       * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
//   * After the game has finished (been run 5 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//     * If the score is negative, run `badGame` for all of the players currently within the starters array.
//     * If the score is equal to zero, do nothing with the starters.
//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.