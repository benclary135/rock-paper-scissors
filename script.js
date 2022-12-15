let result;
let playerScore = 0;
let computerScore = 0;
let playerChoiceValue, computerChoiceValue;
let draw = false;
const valMap = new Map();
valMap.set(1, "Rock");
valMap.set(2, "Paper");
valMap.set(3, "Scissors");  //rock==1, paper==2, scissors==3

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
    } else if ((x==1&&y==2)||(x==2&&y==3)||(x==3&&y==1)) {
        computerScore++;
    } else {
        draw = true;
    }

    updateLiveElements();
    draw = false;
}

