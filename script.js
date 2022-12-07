let result;
let winCounter = 0;
let lossCounter = 0;
//rock==1, paper==2, scissors==3

function getComputerChoice() {
    return(Math.ceil(Math.random()*3));
}

function playRound(playerSelection = prompt("Please choose your weapon!"), computerSelection = getComputerChoice()) {
    
    if (playerSelection === null) {
        alert("Coward!");
    } else {
        let playerSelectionLowercase = playerSelection.toLowerCase();

        if (playerSelectionLowercase == "rock") {  //translate player choice to numerical equivalent
            playerSelection = 1;
        } else if (playerSelectionLowercase == "paper") {
            playerSelection = 2;
        } else if (playerSelectionLowercase == "scissors"){
            playerSelection = 3;
        } else {
            alert("Unknown weapon chosen! Try again.");
        }

        const x = playerSelection;
        const y = computerSelection;

        if ((x==1&&y==3)||(x==2&&y==1)||(x==3&&y==2)) {  //determine the winner
            result = "win";
            return result;
        } else if ((x==1&&y==2)||(x==2&&y==3)||(x==3&&y==1)) {
            result = "loss";
            return result;
        } else {
            result = "draw";
            return result;
        }
    }
}

function game() {
    while (winCounter < 5 && lossCounter < 5) {
        playRound();
        console.log(result);

        if (result == "win") {  //increment proper counter
            winCounter++;
        } else if (result == "loss") {
            lossCounter++;
        }

        if (winCounter == 5) {  //cancel function once a player's score reaches 5
            console.log("You won!!!");
        } else if (lossCounter == 5) {
            console.log("You lost!!!");
        } 
    }
}