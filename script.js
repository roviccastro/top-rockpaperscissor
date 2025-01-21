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

function displayResult(hero, msg, score){
  const resultHero = document.querySelector(".result-hero");
  const resultText = document.querySelector(".result-text");
  const resultScore = document.querySelector(".result-score");

  resultHero.textContent = hero;
  resultText.textContent = msg;
  resultScore.textContent = score;
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
      displayResult(`You Win!`, `Rock beats Scissor!`, `Human Score: ${humanScore += 1} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
      displayResult(`You Win!`, `Paper beats Rock!`, `Human Score: ${humanScore += 1} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'scissor' && computerChoice === 'paper'){
      displayResult(`You Win!`, `Scissor beats Paper!`, `Human Score: ${humanScore += 1} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
      displayResult(`You Lose!`, `Paper beats Rock!`, `Human Score: ${humanScore} Computer Score: ${computerScore += 1}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissor'){
      displayResult(`You Lose!`, `Scissor beats Paper!`, `Human Score: ${humanScore} Computer Score: ${computerScore += 1}`);
    } else if (humanChoice === 'scissor' && computerChoice === 'rock'){
      displayResult(`You Lose!`, `Rock beats Scissor!`, `Human Score: ${humanScore} Computer Score: ${computerScore += 1}`);
    } else {
      displayResult(`-- Round Void --`);
    }

    if (humanScore >= 5){
      displayResult(`You win the game! ${humanScore} points against ${computerScore} points!`);
  
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore >= 5){
      displayResult(`You lose the game! ${computerScore} points against ${humanScore} points!`);
  
      humanScore = 0;
      computerScore = 0;
    }
  }
  
};

playGame();