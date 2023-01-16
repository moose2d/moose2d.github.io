// Set the variable to act h1 by using the function querySelector to search for h1
const myHeading = document.querySelector("h1");
// define the value of h1 (note the . contactonation for OOO)
myHeading.textContent = "Space Sojourn LLC";

// defining a variable
let ownerName;
// giving a value
ownerName = "JD"

// the above lines can be done at once with let ownerName = "JD"

// Data types
/*
string
number
boolean
array
object
*/

// ---- OPERATORS ---
/*
addition, subtraction, multiplication, division (+, -, *, /)
assignment (=)
strict equality (===)
not, does not equal (!, !==)
*/

// --- Make a popup appear using aler() function
alert("This site is a work in progress!");

// --- Example function using multiplication
function multiply (num1, num2) {
	let result = num1 * num2;
	return result;
}

// --- EVENTS and EVENT HANDLERS ---
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me! There are no active links yet!");
});