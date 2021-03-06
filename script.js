let computerChoice; // create a global variable for the computer that will store values of "Rock", "Paper", or "Scissors".
let win = 0; // create a global variable that stores the amount of wins.
let lose = 0; // create a global variable that stores the amount of losses.
const rock = document.querySelector("#rock"); // assign a variable to the button with ID rock.
const paper = document.querySelector("#paper"); // assign a variable to the button with ID paper.
const scissors = document.querySelector("#scissors"); // assign a variable to the button with ID scissors.
const roundResult = document.querySelector(".roundResult"); // assign a variable to the div that contains the result of one round.

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
        return roundResult.textContent = "Damn, it's a tie!";
    // create an if-statement for losing
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "ROCK") {
        ++lose; // increment the amount of losses
        if (lose === 5) { // check if the player has lost 5 times
            roundResult.textContent = `You've lost to a robot, idiot. Your final score is ${win} to ${lose}`;
            win = 0; // reset the amount of wins and loses
            lose = 0;
            return;
        } else {
            return roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}. Your score is ${win} to ${lose}`;
        }
    // create an if-statement for winning
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || 
    playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection.toUpperCase() === "PAPER") {
        ++win; // increment the amount of wins
        if (win === 5) { // check if the player has won 5 times
            roundResult.textContent = `You've won. We need more men (women) like you! Your final score is ${win} to ${lose}`;
            win = 0; // reset the amount of wins and loses
            lose = 0;
            return;
        } else {
            return roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}. Your score is ${win} to ${lose}`;
        }
    } else {
        return roundResult.textContent = "Something went terribly wrong...";
    }
}

rock.addEventListener("click", () => playRound("Rock", computerPlay()));

paper.addEventListener("click", () => playRound("Paper", computerPlay()));

scissors.addEventListener("click", () => playRound("Scissors", computerPlay()));




