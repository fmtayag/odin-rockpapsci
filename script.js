let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
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