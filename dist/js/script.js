// Hamburger 

const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("scale-0")
  navbar.classList.toggle("scale-100")
  hamburger.classList.toggle("hamburger-active")
})

// Mabar

const mabar = document.querySelector(".mabar")

mabar.addEventListener("click", () => {
  alert(`Hayuk Mabar

USERNAME : Arumijen
ID GW : 490245606`)
})

// Navbar Sticky

window.onscroll = () => {
  const nav = document.querySelector("nav")
  const navSticky = nav.offsetTop;

  if (window.pageYOffset > navSticky) {
    nav.classList.add("nav-scrooled")
  } else {
    nav.classList.remove("nav-scrooled")
  }
}