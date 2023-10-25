const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const restartButton = document.querySelector('#restartButton')

let computerScore = 0;
let playerScore = 0;

const weaponButtons = document.querySelectorAll('.weapon');
weaponButtons.forEach(function(button) {
    console.log(button.value);
});


// Declare variables to store references to event handler functions
let rockButtonEvent;
let paperButtonEvent;
let scissorsButtonEvent;

// Function to get a computer choice
function getComputerChoice() {
  let compChoiceArray = ['rock', 'paper', 'scissors'];
  let rand = compChoiceArray[Math.floor(Math.random() * compChoiceArray.length)];
  return rand;
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
    console.log("It's a tie");
    
  } else if (
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors')
  ) {
    
    console.log("You win");
    return true
   
  } else {
    console.log("You lost");
    return false
    
  }
}



// HTML Changes










function eventHandle() {
    

    let out = playRound(this.value, getComputerChoice());
  
    if ((computerScore != 5) && (playerScore != 5)) {
        if (out === true) {
            computerScore += 1;
            compScore.textContent=computerScore;
            console.log("Computer wins this round "+ playerScore + ' '+ computerScore );
            const historyItem = document.createElement('li')
            historyItem.classList.add('removable')
            historyItem.setAttribute('style','color: white; background-color: red; font-size: x-large')
            historyItem.textContent = "Computer wins this round " + " player score is " +  playerScore + " computer score is "+ computerScore;
            historyList.appendChild(historyItem)
 
          } else if (out === false) {
            playerScore += 1;
            plScore.textContent = playerScore;
            const historyItem = document.createElement('li')
            historyItem.classList.add('removable')
            historyItem.setAttribute('style','color: white; background-color: green; font-size: x-large')
            historyItem.textContent = "Player wins this round "+ " player score is " + playerScore + " computer score is "+ computerScore; 
            historyList.appendChild(historyItem)
            console.log("Player wins this round " + playerScore + ' '+ computerScore );
          } else if (out === undefined) {
            let text="It's a tie this round "+ playerScore + ' '+ computerScore ;
            const historyItem = document.createElement('li')
            historyItem.classList.add('removable')
            historyItem.setAttribute('style','color:white; background-color: blue; font-size: x-large')
            historyItem.textContent = "This round is a Draw"  
            historyList.appendChild(historyItem)
            

          }
    }
    else{
        console.log("The game should stop here");

      // Remove the event handler from all buttons I do not want them to listen if I am not in a game
      weaponButtons.forEach(button => {
        button.removeEventListener('click', eventHandle);
      });
    }
   
    
  }
//add event listeners to all weapon buttons
  weaponButtons.forEach(button => {
    button.addEventListener('click', eventHandle);
  });

// remove the list items function

function remove (){
    const historyList= document.querySelector('ol')
    const removableItem = historyList.querySelectorAll('.removable')
    removableItem.forEach(item =>{
       item.parentNode.removeChild(item);
    });
        
        
    }



restartButton.addEventListener('click', function() {

    computerScore = 0;
    playerScore = 0;
    remove()

    plScore.textContent = playerScore;
    compScore.textContent = computerScore;
  
 
    weaponButtons.forEach(button => {
      button.addEventListener('click', eventHandle);
    });
  
    console.log("Game has been reset.");
  });





  const plScore = document.createElement('span');
  const yourScoreDiv = document.querySelector('.playerScore');
  yourScoreDiv.appendChild(plScore);

  const compScore = document.createElement('span');
  const compScoreDiv = document.querySelector('.computerScore');
  compScoreDiv.appendChild(compScore);

  
  const gameHistory = document.querySelector('.fightZone')
  
  const historyList = document.querySelector('ol')



  


