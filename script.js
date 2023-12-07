const navbar = document.querySelector("#navbar")
const hambMenu = document.querySelector("#hamb-menu")

hambMenu.addEventListener("click", () => {
  navbar.classList.toggle("opacity-0")
  navbar.classList.toggle("opacity-100")
  navbar.classList.toggle("scale-0")
  navbar.classList.toggle("scale-100")
})