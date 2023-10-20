const options = ["rock", "paper", "scissors"];

const rock = document.querySelector("#choiceRock");
const paper = document.querySelector("#choicePaper");
const scissors = document.querySelector("#choiceScissors"); 
const computerScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");
const result = document.querySelector(".result");

    
function getRandom() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice
}
    
function checkWinner (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    return "Tie"
    } else if (
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") 
    ) {
        return "Player";
    } else {
        return "Computer";
      }   
    }

function playRound (playerChoice, computerChoice) {
    const result = checkWinner(playerChoice, computerChoice)
    if(result == "Tie") {
        return "It's a Tie!"
    } else if (result == "Player") {
        return `Player Wins! ${playerChoice} beats ${computerChoice}!` 
    } else {
        return `Computer wins! ${computerChoice} beats ${playerChoice}!`   
    }
}

function buttonDisabler() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// DONT KNOW HOW TO MAKE THIS CODE SMALLER YET, NEED TO CORRECT IT//

function colorChange (playerChoice,computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("choiceRock").style.backgroundColor = "green";
        document.getElementById("choiceScissors").style.backgroundColor = "white";
        document.getElementById("choicePaper").style.backgroundColor = "white";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "red";
        document.getElementById("computerChoiceRock").style.backgroundColor = "white";
        document.getElementById("computerChoicePaper").style.backgroundColor = "white";

    } else if (playerChoice == "paper" && computerChoice == "rock") {
        document.getElementById("choicePaper").style.backgroundColor = "green";
        document.getElementById("choiceRock").style.backgroundColor = "white";
        document.getElementById("choiceScissors").style.backgroundColor = "white";
        document.getElementById("computerChoiceRock").style.backgroundColor = "red";
        document.getElementById("computerChoicePaper").style.backgroundColor = "white";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "white";

    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        document.getElementById("choiceScissors").style.backgroundColor = "green";
        document.getElementById("choicePaper").style.backgroundColor = "white";
        document.getElementById("choiceRock").style.backgroundColor = "white";
        document.getElementById("computerChoicePaper").style.backgroundColor = "red";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "white";
        document.getElementById("computerChoiceRock").style.backgroundColor = "white";
    
    } if (computerChoice === "scissors" && playerChoice === "paper") {
        document.getElementById("choicePaper").style.backgroundColor = "red";
        document.getElementById("choiceScissors").style.backgroundColor = "white";
        document.getElementById("choiceRock").style.backgroundColor = "white";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "green";
        document.getElementById("computerChoiceRock").style.backgroundColor = "white";
        document.getElementById("computerChoicePaper").style.backgroundColor = "white";

    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        document.getElementById("choiceScissors").style.backgroundColor = "red";
        document.getElementById("choiceRock").style.backgroundColor = "white";
        document.getElementById("choicePaper").style.backgroundColor = "white";
        document.getElementById("computerChoiceRock").style.backgroundColor = "green";
        document.getElementById("computerChoicePaper").style.backgroundColor = "white";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "white";

    } else if (computerChoice == "paper" && playerChoice == "rock") {
        document.getElementById("choiceRock").style.backgroundColor = "red";
        document.getElementById("choicePaper").style.backgroundColor = "white";
        document.getElementById("choiceScissors").style.backgroundColor = "white";
        document.getElementById("computerChoicePaper").style.backgroundColor = "green";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "white";
        document.getElementById("computerChoiceRock").style.backgroundColor = "white";
    
    } else if (playerChoice == computerChoice) { 
        document.getElementById("choiceScissors").style.backgroundColor = "white";
        document.getElementById("choicePaper").style.backgroundColor = "white";
        document.getElementById("choiceRock").style.backgroundColor = "white";
        document.getElementById("computerChoicePaper").style.backgroundColor = "white";
        document.getElementById("computerChoiceScissors").style.backgroundColor = "white";
        document.getElementById("computerChoiceRock").style.backgroundColor = "white";

    }
}

function scoreTracker(computerNumOfWins, playerNumOfWins) {
    if (computerNumOfWins == 5) {
        result.textContent = "IT'S OVER. COMPUTER WINS!!!!";
        buttonDisabler();
    }else if (playerNumOfWins == 5){
        result.textContent = "IT'S OVER. PLAYER WINS!!!!";
        buttonDisabler();
    };
}

function gameStart() {
    let computerChoice = getRandom();
    playRound(playerChoice, computerChoice);
    console.log(computerChoice);
    
    if (checkWinner(playerChoice,computerChoice) === "Player" ) {
        playerNumOfWins += 1;
        computerScore.textContent = `Computer: ${computerNumOfWins}`;
        playerScore.textContent = `Player: ${playerNumOfWins}`;
        result.textContent = "PLAYER WINS!";
        
    } else if (checkWinner(playerChoice, computerChoice) === "Computer") {
        computerNumOfWins += 1;
        computerScore.textContent = `Computer: ${computerNumOfWins}`;
        playerScore.textContent = `Player: ${playerNumOfWins}`;
        result.textContent = "COMPUTER WINS!";  
    } else {
        computerScore.textContent = `Computer: ${computerNumOfWins}`;
        playerScore.textContent = `Player: ${playerNumOfWins}`;
        result.textContent = "IT'S A TIE!";
    }
    colorChange(playerChoice,computerChoice);

}

let computerNumOfWins = 0;
let playerNumOfWins = 0;

rock.addEventListener("click", () =>{
    playerChoice = "rock";
    gameStart();
    scoreTracker(computerNumOfWins,playerNumOfWins);
    console.log(playerChoice);
});

paper.addEventListener("click", () =>{
    playerChoice = "paper";
    gameStart();
    scoreTracker(computerNumOfWins,playerNumOfWins);
    console.log(playerChoice);

});



scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    gameStart()
    scoreTracker(computerNumOfWins,playerNumOfWins);
    console.log(playerChoice);


});
