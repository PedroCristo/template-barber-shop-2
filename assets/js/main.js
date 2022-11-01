let heroNav = document.getElementById("heroNav");
let iconOpen = document.getElementById("iconOpen");
let iconClose = document.getElementById("iconClose")
let heroSection = document.getElementById("hero")


function navToggle() {
    heroNav.classList.toggle("active")
    iconClose.classList.toggle("active")
    iconOpen.classList.toggle("active")
    heroSection.classList.toggle("active")
  
}