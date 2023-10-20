//rock paper scissors game //

//computer generated choice//
// generates a random choice for the opponent
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

rock.addEventListener("click", function () {
  console.log("rock button clicked");
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function () {
  console.log("paper button clicked");
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function () {
  console.log("scissors button clicked");
  playRound("scissors", getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
  //draws//
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Draw! Both chose rock");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Draw! Both chose paper");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Draw! Both chose scissors");
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
    console.log("Error, something has gone wrong");
  }
}

const computerSelection = getComputerChoice();
