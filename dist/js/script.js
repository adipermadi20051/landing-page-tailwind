const html = document.querySelector("html")

// Mabar

const mabar = document.querySelector(".mabar")
const messageContainer = document.querySelector(".message")
const messageBg = document.querySelector(".message-bg")
const messageOk = document.querySelector(".message-ok")

const renderMessage = (message) => {
  messageContainer.innerHTML = message
  messageBg.classList.remove("hidden")
  messageBg.classList.add("flex")
}

messageOk.addEventListener("click", () => {
  messageBg.classList.remove("flex")
  messageBg.classList.add("hidden")
})

mabar.addEventListener("click", () => {
  const mabarML = `
  <h3 class="text-lg font-bold">Hayyuk Mabar ML</h3> <br>
  <p class="text-md font-medium">ID       : 490245606</p>
  <p class="text-md font-medium">USERNAME : Arrumijen</p>
`
  renderMessage(mabarML)
})

// Dark Mode

const modeToggle = document.querySelector(".mode-toggle")
const modeToggleCircle = document.querySelector(".mode-toggle-circle")

const switchTheme = (mode) => {
  if (mode === "light") {
    modeToggleCircle.classList.remove("right-1")
    modeToggleCircle.classList.add("left-1")
    localStorage.setItem("theme", "light")
    html.classList.remove("dark")
  }
  if (mode === "dark") {
    modeToggleCircle.classList.remove("left-1")
    modeToggleCircle.classList.add("right-1")
    localStorage.setItem("theme", "dark")
    html.classList.add("dark")
  }
}

if (localStorage.getItem("theme") === "light") switchTheme("light")
else switchTheme("dark")

modeToggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") switchTheme("dark")
  else switchTheme("light")
})

// Navbar Sticky And Scrool To Top

window.onscroll = () => {
  const nav = document.querySelector("nav")
  const navSticky = nav.offsetTop

  const about = document.querySelector("#about")
  const aboutPosition = about.offsetTop
  const ScroolToTop = document.querySelector("#scrool-to-top")

  if (window.pageYOffset > aboutPosition) {
    ScroolToTop.classList.remove("hidden")
  } else {
    ScroolToTop.classList.add("hidden")
  }

  if (window.pageYOffset > navSticky ) {
    nav.classList.add("nav-scrooled")
  } else {
    nav.classList.remove("nav-scrooled")
  }
  
}


// Hamburger 

const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("scale-0")
  navbar.classList.toggle("scale-100")
  hamburger.classList.toggle("hamburger-active")
})

document.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navbar && hamburger.classList.contains("hamburger-active")) {
    navbar.classList.remove("scale-100")
    navbar.classList.add("scale-0")
    hamburger.classList.remove("hamburger-active")
  }
})