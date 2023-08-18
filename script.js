function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return num == 0 ? "Rock"
        : num == 1 ? "Paper"
            : "Scrissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie! Nobody wins!");
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

function game() {
    let playerSelection, computerSelection, result;
    let playerWins = 0;
    let computerWins = 0;
    const selections = ["ROCK", "PAPER", "SCRISSORS"];
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What's your choice?");
        computerSelection = getComputerChoice();

        while (!(selections.includes(playerSelection.toUpperCase()))) {
            playerSelection = prompt();
        }

        console.log(`User plays ${playerSelection}, Computer plays ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);

        if (result) {
            playerWins += 1;
        }
        else if (result == false) {
            computerWins += 1;
        }
        console.log(`Current score - Player: ${playerWins}, Computer: ${computerWins}`)
    }

    if (playerWins > computerWins) {
        return "User wins!"
    }
    else if (computerWins > playerWins) {
        return "Computer wins!"
    }
    else {
        return "It's a tie! Play again?"
    }

}

console.log(game());
