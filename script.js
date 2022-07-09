let computerChoice;

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

function playRound(playerSelection, computerSelection) {

    // create an if-statement for the tie
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) { 
        return console.log("Damn, it's a tie!");
    // create an if-statement for losing
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "ROCK") {
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    // create an if-statement for winning
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "PAPER") {
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return console.log("Something went terribly wrong...");
    }
}

playRound('Rock', computerPlay());
