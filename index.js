/* NAV */
let hamb = document.querySelector(".hamburguer__toggle")
let nav_buttons = document.querySelector(".nav__buttons")

hamb.addEventListener("click", () => {
    nav_buttons.classList.toggle("menuOpen")
});

/* RANDOM YOUTUBE PROJECT LINK */
let youtubeLink = document.querySelector(".youtube")
let arrayLinksYoutube = ['https://youtu.be/5l6oqZasL2U', 'https://youtu.be/1F6tvZeYmc4', 'https://youtu.be/rchqnNz6m4o', 'https://youtu.be/CuZZH5s4iHA', 'https://youtu.be/M7dPvERmRoo']

youtubeLink.addEventListener("click", () => {
    youtubeLink.href = arrayLinksYoutube[Math.floor(Math.random() * arrayLinksYoutube.length)]
    // console.log(arrayLinksYoutube[Math.floor(Math.random () * arrayLinksYoutube.length)])
})

/* COPY TEXT TO CLIPBOARD */
let i = 0;

let emailButton = document.querySelector(".email")
emailButton.addEventListener("click", () => {
    navigator.clipboard.writeText('mipfonsecauc@gmail.com')
    emailButton.style.color = "blue"

    let bubble = document.createElement("h5")
    bubble.style.paddingTop = '10px'
    console.log(bubble)
    bubble.innerHTML = 'Email Copied'
    i++

    /* ONLY APPEND ELEMENT ONCE */
    if (bubble && i <= 1) {
        emailButton.appendChild(bubble)
    }
})


// CLOSE MENU WHEN CLICKED OUTSIDE
let mainContent = document.querySelector(".mainContent")
mainContent.addEventListener("click", () => {

    if (nav_buttons.classList.contains("menuOpen")){
        nav_buttons.classList.remove("menuOpen")
    }
})