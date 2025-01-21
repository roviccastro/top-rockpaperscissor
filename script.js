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

  return choice;
}

function displayResult(msg){
  const resultContainer = document.getElementsByClassName("result.container");
}



function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice = '';

  function getPlayerChoice(e){
    humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
  }

  const rockSelected = document.getElementById('rock');
  rockSelected.addEventListener('click', getPlayerChoice);

  const paperSelected = document.getElementById('paper');
  paperSelected.addEventListener('click', getPlayerChoice);

  const scissorSelected = document.getElementById('scissor');
  scissorSelected.addEventListener('click', getPlayerChoice);

  function playRound(humanChoice, computerChoice){  

    if (humanChoice === computerChoice){
      console.log(`It's a tie!`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissor'){

    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
      
    } else if (humanChoice === 'scissor' && computerChoice === 'paper'){
      
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
      
    } else if (humanChoice === 'paper' && computerChoice === 'scissor'){
      
    } else if (humanChoice === 'scissor' && computerChoice === 'rock'){
      
    } else {

    }

  }
  
};

playGame();