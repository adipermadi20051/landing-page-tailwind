const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const html = document.querySelector("html");

// Mabar

const mabar = document.querySelector(".mabar");
const messageContainer = document.querySelector(".message");
const messageBg = document.querySelector(".message-bg");
const messageOk = document.querySelector(".message-ok");

const renderMessage = (message) => {
  messageContainer.innerHTML = message;
  messageBg.classList.remove("hidden");
  messageBg.classList.add("flex");
};

messageOk.addEventListener("click", () => {
  messageBg.classList.remove("flex");
  messageBg.classList.add("hidden");
});

mabar.addEventListener("click", () => {
  const mabarML = `
  <h3 class="text-lg font-bold">Hayyuk Mabar ML</h3> <br>
  <p class="text-md font-medium">ID       : 490245606</p>
  <p class="text-md font-medium">USERNAME : Arumijen</p>
`;
  renderMessage(mabarML);
});

// Dark Mode

const modeToggle = document.querySelector(".mode-toggle");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const switchTheme = (mode) => {
  if (mode === "light") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
  }
  if (mode === "dark") {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
  }
};

if (localStorage.getItem("theme") === "light") switchTheme("light");
else switchTheme("dark");

modeToggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") switchTheme("dark");
  else switchTheme("light");
});

// Navbar Sticky And Scrool To Top

window.onscroll = () => {
  const nav = document.querySelector("nav");
  const navSticky = nav.offsetTop;

  const about = document.querySelector("#about");
  const aboutPosition = about.offsetTop;
  const ScroolToTop = document.querySelector("#scrool-to-top");

  if (window.pageYOffset > aboutPosition) {
    ScroolToTop.classList.remove("hidden");
  } else {
    ScroolToTop.classList.add("hidden");
  }

  if (window.pageYOffset > navSticky) {
    nav.classList.remove("dark:bg-gradient-to-br");
    nav.classList.add("nav-scrooled");
  } else {
    nav.classList.remove("nav-scrooled");
    nav.classList.add("dark:bg-gradient-to-br");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

document.addEventListener("click", async (e) => {
  if (
    e.target.classList.contains("hamburger") ||
    e.target.classList.contains("hamburger-line")
  ) {
    navbar.classList.toggle("translate-x-full");
    hamburger.classList.toggle("hamburger-active");
  }
  if (
    e.target !== hamburger &&
    e.target !== navbar &&
    hamburger.classList.contains("hamburger-active")
  ) {
    navbar.classList.add("translate-x-full");
    hamburger.classList.remove("hamburger-active");
  }
});

