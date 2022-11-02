const menu = document.getElementById("menubar")
const closeButton = document.getElementById("closemenu")
const openButton = document.getElementById("openbutton")

closeButton.addEventListener("click", ()=>{ menu.classList.add("d-none")})
openButton.addEventListener("click", ()=>{ menu.classList.remove("d-none")})