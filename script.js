let computerChoice; // create a global variable for the computer that will store values of "Rock", "Paper", or "Scissors".
let win = 0; // create a global variable that stores the amount of wins.
let lose = 0; // create a global variable that stores the amount of losses.

// create a function that randomly returns either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {

    // store a whole number between 1 and 3 in the global variable computerChoice
    computerChoice = Math.floor((Math.random() * 3) + 1);

    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else if (computerChoice === 2) {
        computerChoice = "Paper";
    } else if (computerChoice === 3) {
        computerChoice = "Scissors";
    } else {
        console.log("Something went terribly wrong...");
    }

    return computerChoice;
}

// create a function which plays one round of the game

function playRound(playerSelection, computerSelection) {

    // create an if-statement for the tie
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) { 
        return console.log("Damn, it's a tie!");
    // create an if-statement for losing
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "ROCK") {
        ++lose; // increment the amount of losses
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    // create an if-statement for winning
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "PAPER") {
        ++win; // increment the amount of wins
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return console.log("Something went terribly wrong...");
    }
}

// create a function which plays five rounds of the game and declares the winner
function game() {

    // create a loop which will play five rounds of the game
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose: Rock, Paper, or Scissors", ""); // allow user to input his weapon
        playerSelection = playerChoice.toUpperCase().slice(0, 1) + playerChoice.toLowerCase().slice(1);  // make the user input look beautiful by making the first letter uppercase and others lowercase.
        playRound(playerSelection, computerPlay());
    } 

    // create an if-statement for the tie of the whole game
    if (win === lose) {
        console.log("It's a tie, mate :(");
    // create an if-statement for the win of the whole game
    } else if (win > lose) {
        console.log("You win, motherfucker!");
    // create an if-statement for losing the whole game
    } else if (win < lose) {
        console.log("You lost to a robot, noob.");
    // create an else-statement for something horrible... 
    } else {
        console.log("Something went terribly wrong...");
    }
}

game();

