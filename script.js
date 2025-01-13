let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

  let randomNumber = Math.floor(Math.random() * 3);

  let choice 
  if (randomNumber === 0){
    choice = `rock`;
  } else if (randomNumber === 1){
    choice = `paper`;
  } else if (randomNumber === 2){
    choice = `shoe`;
  } else {
    choice = `rock`;
  }

  return choice;
}

function getHumanChoice(){
  return window.prompt(`Rock, Paper, Shoe: `, `Paper`)
}

function playRound(humanChoice, computerChoice){
  humanChoice = getHumanChoice().toLowerCase();

  switch (humanChoice, computerChoice){
    case `rock`, `rock`:
      console.log(`It's a tie!`)
      break;
  }
}