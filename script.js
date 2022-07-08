// create a function that randomly returns either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {

    // create a variable that stores a whole number between 1 and 3
    let computerChoice = Math.floor((Math.random() * 3) + 1);

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