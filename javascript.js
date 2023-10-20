
function getComputerChoice() {
    let compChoiceArray = ['rock', 'paper', 'scissors'];
    let rand = compChoiceArray[Math.floor(Math.random() * compChoiceArray.length)];
    return rand;
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    if (computerSelection===playerSelection) {
        return "It's a tie, both players selected " + playerSelection + " !";
    } else if (
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') || 
        (computerSelection === "rock" && playerSelection === "scissors")
    ) {
        return "You Lose! " + computerSelection + " beats " + playerSelection + " !";
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection + " !";
    }
}
  console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
