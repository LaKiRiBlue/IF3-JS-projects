
const gameButtons = document.querySelectorAll(".player img");
const resetBtn = document.querySelector(".reset button");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const playerPointsDisplay = document.querySelector(".player-points");
const computerPointsDisplay = document.querySelector(".computer-points");
const computerChoiceImg = document.getElementById("computerChoice");
const message = document.querySelector(".message p");

// Initialize scores and points
let playerScore = 0;
let computerScore = 0;
let playerPoints = 0;
let computerPoints = 0;
let gameActive = true; 

// Add event listeners to game buttons
gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (gameActive) {
            playRound(button.id);
        }
    });
});
// Add event listener to reset button
resetBtn.addEventListener("click", resetGame);

// Function to play a round of the game
function playRound(playerSelection) {
    if (!gameActive) return; // If the game is not active, do nothing

    // Disable game buttons
    gameButtons.forEach(button => button.disabled = true);

    // Generate computer's choice
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    // Update computer's choice image
    computerChoiceImg.src = `${computerSelection}.png`;

    // Determine the winner
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = "You win!";
        playerPoints++;
    } else {
        result = "Computer wins!";
        computerPoints++;
    }

    showMessage(result);


    // Check if player or computer gained 3 points
    if (playerPoints === 3 || computerPoints === 3) {
        if (playerPoints === 3) {
            playerScore++;
        } else {
            computerScore++; 
        }
        endGame();
    }
    // Update scores and points
    updateScores();
}

// Function to update scores and points
function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
}

// Function to display message
function showMessage(text) {
    message.textContent = text;
    console.log(message);
    console.log(text);
}

function endGame() {
    gameActive = false;
    resetBtn.disabled = false; 
    let result = "Game over. Click - New game to play again.";
    showMessage(result);
}

// Function to reset the game
function resetGame() {
    gameActive = true; // Set the game active again
    playerPoints = 0;
    computerPoints = 0;
    updateScores();
    showMessage(" ⬅️ Choose an option");
    // Reset computer's choice image to default
    computerChoiceImg.src = "question.png";
    resetBtn.disabled = true; // Disable the reset button again
    // Enable game buttons
    gameButtons.forEach(button => button.disabled = false);
}

// Call resetGame to initialize the game when the page loads
resetGame();

// Function to erase scores
function eraseScores() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}

// Call eraseScores 
document.querySelector(".erase button").addEventListener("click", eraseScores);




