//rock paper scissors //

//computer generated choice//

let playerSelection = prompt(
  "please enter rock, paper or scissors"
).toLocaleLowerCase(0);
console.log("Your choice is " + playerSelection);

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  //draws//
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Draw!");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Draw!");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Draw!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! rock beats scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("you lose! rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! scissors beats paper");
  } else {
    console.log("draw! or something has gone wrong");
  }
}

const computerSelection = getComputerChoice();
console.log("computer's choice is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
