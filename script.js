function getComputerChoice(){

  let randomNumber = Math.floor(Math.random() * 3);

  let choice 
  if (randomNumber === 0){
    choice = `Rock`;
  } else if (randomNumber === 1){
    choice = `Paper`;
  } else if (randomNumber === 2){
    choice = `Shoe`;
  } else {
    choice = `Rock`;
  }

  return choice;
}

console.log(getComputerChoice());