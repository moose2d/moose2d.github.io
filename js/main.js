const myImage = document.querySelector("img");

/* --------- Image Display Example - changers on click ------------
/*
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/heartNebula_2.jpg") {
    myImage.setAttribute("src", "images/heartNebula_1.jpg");
  } else {
    myImage.setAttribute("src", "images/heartNebula_2.jpg");
  }
};
*/

const nextNewMoonDay = 23;
const currentDay = 21;

function daysToNewMoon (currentDay, nextNewMoonDay) {
  return nextNewMoonDay - currentDay;
}

console.log(`Days to new moon: ${daysToNewMoon(currentDay, nextNewMoonDay)}`);

// Create a reference to the "container" class from HTML
const container = document.querySelector('.container'); 
// Create a new 'div' element and store in a variable named content
const content = document.createElement('div');
// Apply a class tag to the new variable "content"
content.classList.add('container');
// Add text to the div
content.textContent = 'This is text content in a container';
// Add the variable to the container reference
container.appendChild(content);

/* ---- EXAMPLE FUNCITONS ---- */

// --- add7 ----
/*
function add7 (myNum) {
  return myNum + 7;
}

console.log(`The result of the add7 function is ${add7(7)}`)
*/

// ======= ROCK PAPER SCISSORS =========
/*
let choices = ['Rock', 'Paper', 'Scissors'];
let playerChoice;
function getComputerChoice(choices) {
  const random = Math.floor(Math.random() * choices.length);
  computerChoice = choices[random].toLowerCase();
  return computerChoice; 
}

function getPlayerChoice() {
 playerChoice = prompt("Select Rock, Paper, or Scissors:" ).toLowerCase();
 console.log(`Player chose ${playerChoice}`)
}

getPlayerChoice()

function compareChoices (playerChoice, computerChoice) {
  console.log(`Player choice is ${playerChoice} and computer choice is ${computerChoice}`)
  if ((playerChoice == "Scissors" && computerChoice == "Paper")    ||
      (playerChoice == "Rock"     && computerChoice == "Scissors") ||
      (playerChoice == "Paper"    && computerChoice == "Rock")) {
    console.log("Congratulations, you win!")
  } else if (playerChoice == computerChoice) {
    console.log("The match is a draw!")
  } else {
    console.log("Sorry, you lost to the computer!")
  }
}

compareChoices(playerChoice, getComputerChoice(choices))
*/