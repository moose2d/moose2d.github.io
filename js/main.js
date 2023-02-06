
let currentUrl = window.location.href;
const IMG_PATH = "../images/";

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



// =========== IMG CAROUSEL============
 const carousel_container = document.querySelector(".carousel-container");
if (currentUrl.includes("index.html")) {
  // code specific to images.html
  carousel_container.style.width = "750px";
  carousel_container.style.align = "center";
} else if (currentUrl.includes("images.html")) {
  // code specific to images.html
  carousel_container.style.width = "500px";
}

 const slides = document.querySelectorAll(".slide");
 let index = 0;

 function showSlide() {
   for (let i = 0; i < slides.length; i++) {
     slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");
 }

 const prevBtn = document.getElementById("prevBtn");
 prevBtn.addEventListener("click", function() {
  console.log("prevBtn pressed");
   index--;
   if (index < 0) {
     index = slides.length - 1;
   }
   showSlide();
 });

 const nextBtn = document.getElementById("nextBtn");
 nextBtn.addEventListener("click", function() {
  console.log("pnextBtn pressed");
   index++;
   if (index >= slides.length) {
     index = 0;
   }
   showSlide();
 });


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