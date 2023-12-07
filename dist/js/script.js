// Hamburger 

const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("scale-0")
  navbar.classList.toggle("scale-100")
  navbar.classList.toggle("opacity-0")
  navbar.classList.toggle("opacity-100")
  hamburger.classList.toggle("hamburger-active")
})

// Mabar

const mabar = document.querySelector(".mabar")

mabar.addEventListener("click", () => {
  alert(`Hayuk Mabar

USERNAME : Arumijen
ID GW : 490245606`)
})