let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice) {
    let winner = getWinner(humanChoice, computerChoice);

    if (winner == "human") {
        console.log(`${humanChoice} beats ${computerChoice}! You win!`);
        humanScore++;
    }
    else if (winner == "computer") {
        console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
        computerScore++;
    }
    else {
        console.log(`It's a tie!`);
    }
}

function getWinner(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") 
                return "computer";
            else if (computerChoice == "scissor") 
                return "human";
            else 
                return "tie";
        case "paper":
            if (computerChoice == "scissor") 
                return "computer";
            else if (computerChoice == "rock") 
                return "human";
            else 
                return "tie";
        case "scissor":
            if (computerChoice == "rock") 
                return "computer";
            else if (computerChoice == "paper") 
                return "human";
            else 
                return "tie";
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Make your selection (rock, paper, or scissor): ").trim().toLowerCase();

    return choice;
}