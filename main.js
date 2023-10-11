//rock paper scissors //

//computer generated choice//
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());

let playerSelection = prompt("enter rock, paper or scissors");
console.log(playerSelection);

//function playRound(playerSelection, computerSelection) {}

//console.log(rockPaperScissors());
// 2. loop from 1 to the user's entered rock paper or scissors//

/* for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
 */
