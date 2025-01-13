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
  return window.prompt(`Rock, Paper, Shoe: `, `Paper`)
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  humanChoice === computerChoice 
  ? console.log(`It's a tie!`)
  : humanChoice === `rock` && computerChoice === `scissor`
  ? console.log(`You win! Rock beats Scissor!`)
  : humanChoice === `paper` && computerChoice === `rock`
  ? console.log(`You win! Paper beats Rock!`)
  : humanChoice === `scissor` && computerChoice === `paper`
  ? console.log(`You win! Scissor beats Paper!`)
  : console.log(`Error`);

}

playRound(getHumanChoice(), getComputerChoice());