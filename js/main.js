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

// BUTTON TOGGLES
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible") 
  ? navToggle.setAttribute("aria-expanded", false) 
  : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});
