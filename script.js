let result;
let playerScore = 0;
let computerScore = 0;
let playerChoiceValue, computerChoiceValue;
const valMap = new Map();
valMap.set(1, "Rock");
valMap.set(2, "Paper");
valMap.set(3, "Scissors");  //rock==1, paper==2, scissors==3

function reset() {
    playerScore = 0;
    computerScore = 0;
    updateLiveElements();
    document.getElementById("rock-button").disabled = false;
    document.getElementById("paper-button").disabled = false;
    document.getElementById("scissors-button").disabled = false;    document.getElementById("you-chose").innerHTML = "-";
    document.getElementById("computer-chose").innerHTML = "-";
    document.getElementById("result").innerHTML = "You Reset the Game."
}

function getComputerChoice() {
    return(Math.ceil(Math.random()*3));
}

function updateLiveElements() {
    let playerLiveScore = document.getElementById("player-score");
    let computerLiveScore = document.getElementById("computer-score");
    let playerLiveChoice = document.getElementById("you-chose");
    let computerLiveChoice = document.getElementById("computer-chose");

    playerLiveScore.innerHTML = "Player: " + playerScore;
    computerLiveScore.innerHTML = "Computer: " + computerScore;
    playerLiveChoice.innerHTML = valMap.get(playerChoiceValue);
    computerLiveChoice.innerHTML = valMap.get(computerChoiceValue);
}

function playRound(playerSelection, computerSelection) {

    const x = playerSelection;
    const y = computerSelection;
    playerChoiceValue = x;
    computerChoiceValue = y;

    if ((x==1&&y==3)||(x==2&&y==1)||(x==3&&y==2)) {  //determine the winner
        playerScore++;
        document.getElementById("result").innerHTML = "You Won!";
    } else if ((x==1&&y==2)||(x==2&&y==3)||(x==3&&y==1)) {
        computerScore++;
        document.getElementById("result").innerHTML = "You Lost.";
    } else {
        document.getElementById("result").innerHTML = "Draw!";
    }
    updateLiveElements();

    if (playerScore === 5) {
        document.getElementById("result").innerHTML = "You won the game! Reset or refresh the page to play again.";
        document.getElementById("rock-button").disabled = true;
        document.getElementById("paper-button").disabled = true;
        document.getElementById("scissors-button").disabled = true;
    } else if (computerScore === 5) {
        document.getElementById("result").innerHTML = "The computer won the game.  Reset or refresh the page to play again.";
        document.getElementById("rock-button").disabled = true;
        document.getElementById("paper-button").disabled = true;
        document.getElementById("scissors-button").disabled = true;    }
}

