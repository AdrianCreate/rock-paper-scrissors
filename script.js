function getComputerChoice () {
    let num = Math.floor(Math.random()*3);
    return num == 0 ? "Rock"
    : num == 1 ? "Paper"
    : "Scrissors" ;
}

function playRound (playerSelection , computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log ("It's a tie! Nobody wins!");
        return null
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
     console.log("You Lose! Paper beats Rock");
     return false

    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
     console.log("You Win! Paper beats Rock");
     return true
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCRISSORS') {
     console.log("You Win! Rock beats Scrissors");
     return true
    }
    else if (playerSelection.toUpperCase() === 'SCRISSORS' && computerSelection.toUpperCase() === 'ROCK') {
     console.log("You Lose! Rock beats Scrissors");
     return false
    }
    else if (playerSelection.toUpperCase() === 'SCRISSORS' && computerSelection.toUpperCase() === 'PAPER') {
     console.log("You Win! Scrissors beats Paper");
     return true
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCRISSORS') {
     console.log("You Lose! Scrissors beats Paper");
     return false
    }
    else {
        console.log("Not a valid input");
        return null
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);
