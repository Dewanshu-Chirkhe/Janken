const choices = ["rock", "paper", "scissor"];
const emojis = {
    rock: "\u270A",
    paper: "\u270B",
    scissor: "\u270C\uFE0F",
    default: "\u2754",
};

let playerScore = 0;
let computerScore = 0;

const playerIcon = document.querySelector(".player p");
const computerIcon = document.querySelector(".computer p");
const playerScoreDisplay = document.querySelector(".player-score p");
const computerScoreDisplay = document.querySelector(".computer-score p");
const resultText = document.querySelector(".text h2");

document.querySelectorAll(".choices > div").forEach((choiceDiv) => {
    choiceDiv.addEventListener("click", () => {
        const playerChoice = choiceDiv.className;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        playerIcon.textContent = emojis[playerChoice];
        computerIcon.textContent = emojis[computerChoice];

        if (winner === "player") {
            playerScore++;
            resultText.textContent = "You won this round";
        } else if (winner === "computer") {
            computerScore++;
            resultText.textContent = "You lost the round";
        } else {
            resultText.textContent = "It's a draw";
        }

        playerScoreDisplay.textContent = `Player : ${playerScore}`;
        computerScoreDisplay.textContent = `Computer : ${computerScore}`;

        if (playerScore == 5 || computerScore == 5) {
            setTimeout(() => {
                alert(
                    playerScore == 5
                        ? "You won the game!"
                        : "Computer won the game"
                );
                resetGame();
            }, 100);
        }
    });
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player == computer) return "draw";
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) {
        return "player";
    } else return "computer";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerIcon.textContent = emojis.default;
    computerIcon.textContent = emojis.default;
    playerScoreDisplay.textContent = "Player : 0";
    computerScoreDisplay.textContent = "Computer : 0";
    resultText.textContent = "First to score 5 points wins the game";
}
