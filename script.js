const navbar = document.querySelector("#navbar")
const hambMenu = document.querySelector("#hamb-menu")

hambMenu.addEventListener("click", () => {
  navbar.classList.toggle("hidden")
  navbar.classList.toggle("flex")
})