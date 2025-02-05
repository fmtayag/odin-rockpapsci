/* Entry code */
playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    const MAX_ROUNDS = 5;

    while(humanScore + computerScore + ties < MAX_ROUNDS) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        let winner = playRound(humanChoice, computerChoice);

        switch(winner) {
            case "human": humanScore++; break;
            case "computer": computerScore++; break;
            case "tie": ties++; break;
        }

    }

    displayGameWinner(humanScore, computerScore, ties);
}

function displayGameWinner(humanScore, computerScore, ties) {
    if (humanScore > computerScore)
        alert(`You won the game by ${humanScore}-${computerScore}! There were ${ties} ties.`);
    else 
        alert(`You lost the game by ${computerScore}-${humanScore}! There were ${ties} ties.`);
}

function playRound(humanChoice, computerChoice) {
    let winner = getRoundWinner(humanChoice, computerChoice);

    if (winner == "human") {
        alert(`${humanChoice} beats ${computerChoice}! You win!`);
    }
    else if (winner == "computer") {
        alert(`${computerChoice} beats ${humanChoice}! You lose!`);
    }
    else {
        alert(`It's a tie!`);
    }

    return winner;
}

function getRoundWinner(humanChoice, computerChoice) {
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