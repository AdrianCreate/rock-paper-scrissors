function getComputerChoice () {
    let num = Math.floor(Math.random()*3);
    return num == 0 ? "Rock"
    : num == 1 ? "Paper"
    : "Scrissors" ;
}

function playRound (playerSelection , computerSelection) {
    if(typeof str != 'string' || str.length === 0){
        return 'Not a valid input';
    }

    playerSelection = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        console.log ("It's a tie! Nobody wins!");
        return null
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
     console.log("You Lose! Paper beats Rock");
     return false

    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
     console.log("You Win! Paper beats Rock");
     return true
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scrissors') {
     console.log("You Win! Rock beats Scrissors");
     return true
    }
    else if (playerSelection === 'Scrissors' && computerSelection === 'Rock') {
     console.log("You Lose! Rock beats Scrissors");
     return false
    }
    else if (playerSelection === 'Scrissors' && computerSelection === 'Paper') {
     console.log("You Win! Scrissors beats Paper");
     return true
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scrissors') {
     console.log("You Lose! Scrissors beats Paper");
     return false
    }
    else {
        return null
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
