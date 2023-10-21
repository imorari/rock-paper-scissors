
function getComputerChoice() {
    let compChoiceArray = ['rock', 'paper', 'scissors'];
    let rand = compChoiceArray[Math.floor(Math.random() * compChoiceArray.length)];
    return rand;
}
//const playerSelection = prompt("Choose your fighter: ");                                 we are going to prompt the user for input everytime the playround function is called inside the game function
//const computerSelection = getComputerChoice();                                            
function playRound(playerSelection, computerSelection) {
    if (computerSelection===playerSelection) {
        return undefined                                                                    //"It's a tie, both players selected " + playerSelection + " !";
    } else if (
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') || 
        (computerSelection === "rock" && playerSelection === "scissors")
    ) {
        return true                                                                         //"You Lose! " + computerSelection + " beats " + playerSelection + " !";
    } else {
        return false                                                                        //"You Win! " + playerSelection + " beats " + computerSelection + " !";
    }
}
  //console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
              const computerSelection = getComputerChoice();
              let playerSelection;
        while (true) { 
            playerSelection = prompt("Choose your fighter: ").toLowerCase();           
            if (playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper") {   //condition for input validation
                break;
            } else {
                alert("Your choices are \"paper\", \"rock\", or \"scissors\". Please try again.");
            }
        }
        const result = playRound(playerSelection, computerSelection);                       //computer selection is already lower case so there is no need for toLowerCase function    
        

        if (result === undefined) {
            // The round was skipped
            console.log("It is a tie")                                              // added this note to know when there is a tie
            console.log("Current computer score is: " + computerScore )
            console.log("Current player score is: " + playerScore)
        } else if (result === true) {
            computerScore++;
            console.log("Current computer score is: " + computerScore )
            console.log("Current player score is: " + playerScore )
        } else {
            playerScore++;
            console.log("Current computer score is: " + computerScore )
            console.log("Current player score is: " + playerScore )
        }
    }

    if (playerScore === 5) {
        console.log("Player wins! with score: " + playerScore + " to " + computerScore);
    } else {
        console.log("Computer wins! with score "+ computerScore + " to " + playerScore);
    }

 }
// Start game
game()
