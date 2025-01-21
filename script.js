let getComputerChoice = () => {

  let randomNumber = Math.floor(Math.random() * 3);

  let choice 
  if (randomNumber === 0){
    choice = `rock`;
  } else if (randomNumber === 1){
    choice = `paper`;
  } else if (randomNumber === 2){
    choice = `scissor`;
  } else {
    choice = `rock`;
  }

  console.info(`Computer Choice: ${choice}`);
  return choice;
}

function displayResult(msg){
  const resultContainer = document.getElementsByClassName("result.container");
  const resultText = document.querySelector(".result-text");

  resultText.textContent = msg;
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice = '';

  function getPlayerChoice(e){
    humanChoice = e.target.id;
    console.info(`Human Choice: ${humanChoice}`);

    playRound(humanChoice.toString(), getComputerChoice());
  }

  const rockSelected = document.getElementById('rock');
  rockSelected.addEventListener('click', getPlayerChoice);

  const paperSelected = document.getElementById('paper');
  paperSelected.addEventListener('click', getPlayerChoice);

  const scissorSelected = document.getElementById('scissor');
  scissorSelected.addEventListener('click', getPlayerChoice);

  function playRound(humanChoice, computerChoice){  

    if (humanChoice === computerChoice){
      displayResult(`It's a tie!`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissor'){
      displayResult(`You win! Rock beats Scissor!`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
      displayResult(`You win! Paper beats Rock!`);
    } else if (humanChoice === 'scissor' && computerChoice === 'paper'){
      displayResult(`You win! Scissor beats Paper!`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
      displayResult(`You lose! Paper beats Rock!`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissor'){
      displayResult(`You lose! Scissor beats Paper!`);
    } else if (humanChoice === 'scissor' && computerChoice === 'rock'){
      displayResult(`You lose! Rock beats Scissor!`);
    } else {
      displayResult(`-- Round Void --`);
    }

  }
  
};

playGame();