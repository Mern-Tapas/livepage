const images = document.querySelectorAll(".photo")
images.forEach((photo) => {
    photo.addEventListener("click", (event) => {
        const element = event.target
        let imagecontainer = document.getElementById("imagepreview")
        imagecontainer.src = element.src
        console.log(imagecontainer)
        document.getElementById("fullimage").classList.add("openimage")
    })
})
document.getElementById("fullimage").addEventListener("click",()=>{
    document.getElementById("fullimage").classList.remove("openimage")
})