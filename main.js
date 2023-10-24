//rock paper scissors game //

const message = document.querySelector("#message");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

let scorePlayer = 0;
let scoreComputer = 0;
let roundWinner = "";

//computer generated choice//
// generates a random choice for the opponent
function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * 3)];
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
    console.log("draw you both chose rock!");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Draw! You both chose rock!";
    message.appendChild(content);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Draw! Both chose paper");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Draw! You both chose paper!";
    message.appendChild(content);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Draw! Both chose scissors");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Draw! You both chose scissors!";
    message.appendChild(content);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! paper beats rock");
    const content = document.createElement("div");
    content.classList.add("content");
    //announces winner/loser
    content.textContent = "You lose! Paper beats rock!";
    message.appendChild(content);
    //updates score
    scoreComputer++;
    computerScore.textContent = `Computer: ${scoreComputer}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! rock beats scissors");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "You win! Rock beats scissors!";
    message.appendChild(content);
    scorePlayer++;
    playerScore.textContent = `Player: ${scorePlayer}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! paper beats rock");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "You win! Paper beats rock!";
    message.appendChild(content);
    scorePlayer++;
    playerScore.textContent = `Player: ${scorePlayer}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! scissors beats paper");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "You lose! Scissors beats paper!";
    message.appendChild(content);
    scoreComputer++;
    computerScore.textContent = `Computer: ${scoreComputer}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("you lose! rock beats scissors");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "You lose! Rock beats scissors!";
    message.appendChild(content);
    scoreComputer++;
    computerScore.textContent = `Computer: ${scoreComputer}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! scissors beats paper");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "You win! Scissors beats paper!";
    message.appendChild(content);
    scorePlayer++;
    playerScore.textContent = `Player: ${scorePlayer}`;
  } else {
    console.log("Error, something has gone wrong");
  }
}

const computerSelection = getComputerChoice();
//display the computer's choice in the DOM
