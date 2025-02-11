let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

let buttonRock = document.querySelector("button#rock");
let buttonPaper = document.querySelector("button#paper");
let buttonScissor = document.querySelector("button#scissor");
let buttonReset = document.querySelector("button#reset");
let paraResults = document.querySelector("p#results");
let dispScoreHuman = document.querySelector("span#player"); 
let dispScoreComputer = document.querySelector("span#computer"); 
let options = document.querySelector("div#options");

buttonReset.style.visibility = "hidden";

options.addEventListener("click", (e) => {
    const humanChoice = e.target.id;
    playGame(humanChoice); // Entry code
});

buttonReset.addEventListener("click", () => {
    resetGame();
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    isGameOver = false;

    dispScoreHuman.textContent = humanScore;
    dispScoreComputer.textContent = computerScore;
    paraResults.textContent = "Click any button!";
    buttonReset.style.visibility = "hidden";
}

function playGame(humanChoice) {
    if(!isGameOver) {
        const computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);

        switch(winner) {
            case "human": 
                humanScore++; 
                break;
            case "computer": 
                computerScore++; 
                break;
        }

        dispScoreHuman.textContent = humanScore;
        dispScoreComputer.textContent = computerScore;

        if (humanScore >= 5 || computerScore >= 5) {
            displayGameWinner(humanScore, computerScore);
            buttonReset.style.visibility = "visible";
            isGameOver = true;
        }
    }
}

function displayGameWinner(humanScore, computerScore) {
    if (humanScore > computerScore)
        paraResults.textContent = `You won the game by ${humanScore}-${computerScore}!`;
    else 
        paraResults.textContent = `You lost the game by ${computerScore}-${humanScore}!`;

}

function playRound(humanChoice, computerChoice) {
    let winner = getRoundWinner(humanChoice, computerChoice);

    if (winner == "human")
        paraResults.textContent = `${humanChoice} beats ${computerChoice}! You win!`;
    else if (winner == "computer")
        paraResults.textContent = `${humanChoice} loses to ${computerChoice}! You lose!`;
    else
        paraResults.textContent = `It's a tie!`;

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
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}