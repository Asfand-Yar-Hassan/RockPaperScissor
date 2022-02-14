
let result;
function computerPlay(compChoice) {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 0) {
        compChoice = "Rock"
    }
    else if (choiceNum === 1) {
        compChoice = "Paper"
    }
    else if (choiceNum === 2) {
        compChoice = "Scissors"
    }
    return compChoice;
}
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()

    if (computerSelection == playerSelection) {
        result = "It's a Tie"
    }
    else if (
        (computerSelection === "rock" && playerSelection === "scissor") ||
        (computerSelection === "scissor" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        result = "Computer Won!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper") 
        ) {
        result = "Player won!"
    }
    return result;
}
const playerSelection = "rock"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))