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
    choice = `scissor`;
  } else {
    choice = `rock`;
  }

  return choice;
}

function getHumanChoice(){
  return window.prompt(`Rock, Paper, Scissor: `, `Paper`)
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  humanChoice === computerChoice 
  ? console.log(`It's a tie!`)
  : humanChoice === `rock` && computerChoice === `scissor`
  ? console.log(`You win! Rock beats Scissor! Score: ${humanScore += 1}`)
  : humanChoice === `paper` && computerChoice === `rock`
  ? console.log(`You win! Paper beats Rock! Score: ${humanScore += 1}`)
  : humanChoice === `scissor` && computerChoice === `paper`
  ? console.log(`You win! Scissor beats Paper! Score: ${humanScore += 1}`)
  : humanChoice === `rock` && computerChoice === `paper`
  ? console.log(`You lose! Rock beats Scissor! Computer Score: ${computerScore += 1}`)
  : humanChoice === `paper` && computerChoice === `scissor`
  ? console.log(`You lose! Paper beats Rock! Computer Score: ${computerScore += 1}`)
  : humanChoice === `scissor` && computerChoice === `rock`
  ? console.log(`You lose! Scissor beats Paper! Computer Score: ${computerScore += 1}`)
  : console.log(`Error`);
}

playRound(getHumanChoice(), getComputerChoice());