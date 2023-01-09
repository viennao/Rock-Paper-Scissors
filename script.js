const btns = document.querySelectorAll("button");
const displayMessages = document.getElementById("messages");
const plyrScoreDisplay = document.getElementById("playerScore");
const compScoreDisplay = document.getElementById("computerScore");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const weapons = ["rock", "paper", "scissors"];
const weaponDisplay = {
  rock: "✊",
  paper: "🤚",
  scissors: "✌️",
};

let playerScore = 0;
let computerScore = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    play(btn.className);
    playerSign.textContent = weaponDisplay[btn.className];
  });
});

function play(playerChoice) {
  let computerChoice = getComputerChoice();
  computerSign.textContent = weaponDisplay[computerChoice];

  if (playerScore < 5 && computerScore < 5) {
    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      displayScore();
      displayMessages.textContent = `Yay! you win ${playerChoice} beats ${computerChoice}`;
    }
    if (
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      computerScore++;
      displayScore();
      displayMessages.textContent = `Oh no you lose, ${computerChoice} beats ${playerChoice}`;
    }
    if (computerChoice === playerChoice) {
      displayMessages.textContent = `it's tie.`;
    } else if (playerScore === 5) {
      displayMessages.textContent = `YOU WON!`;
      alert("YOU WON, play again?");
      restartGame();
    } else if (computerScore === 5) {
      displayMessages.textContent = `YOU LOSE!`;
      alert("Bro, you lost. play again?");
      restartGame();
    }
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  plyrScoreDisplay.textContent = `Player score: 0`;
  compScoreDisplay.textContent = `Computer score: 0`;
  playerSign.textContent = "❔";
  computerSign.textContent = "❔";
  displayMessages.textContent = "Click above to start!";
}

function getComputerChoice() {
  const getrandom = Math.floor(Math.random() * 3);
  return weapons[getrandom];
}

function displayScore() {
  plyrScoreDisplay.textContent = `Player score: ${playerScore}`;
  compScoreDisplay.textContent = `Computer score: ${computerScore}`;
}
