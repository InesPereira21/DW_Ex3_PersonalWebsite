//ANIMATION  --> 6
//NAV        --> 39
//CLOSE MENU --> 49

let windowInitialWidth = window.innerWidth;
let windowInitialHeight = window.innerHeight;

// ANIMATION 
let cursor_rect = document.querySelector(".cursor")
let playground = document.querySelector(".playground")
playground.style.width = windowInitialWidth;

cursor_rect.style.left = window.innerWidth - 150;
cursor_rect.style.top = window.innerHeight - 50;


document.addEventListener("mousemove", (e) => {
    cursor_rect.style.left = e.pageX;
    cursor_rect.style.top = e.pageY;
})

document.addEventListener("click", () => {
    cursor_rect.classList.toggle("grows")
})

// MOBILE VERSION
let posCursor;
document.addEventListener("touchmove", (e) => {
    posCursor = cursor_rect.getBoundingClientRect()
    cursor_rect.style.left = e.touches[0].pageX;
    cursor_rect.style.top = e.touches[0].pageY;

    /*if (posCursor.x >= windowInitialWidth - 100 || posCursor.x >= 100) {
        window.resizeTo(windowInitialWidth, windowInitialHeight) //Doesn't work
    }*/
})

/* NAV */
let hamb = document.querySelector(".hamburguer__toggle")
let nav_buttons = document.querySelector(".nav__buttons")
hamb.style.right = window.innerWidth - '1.2rem';

hamb.addEventListener("click", () => {
    nav_buttons.classList.toggle("menuOpen")
});


// CLOSE MENU WHEN CLICKED OUTSIDE
playground.addEventListener("click", () => {

    if (nav_buttons.classList.contains("menuOpen")){
        nav_buttons.classList.remove("menuOpen")
    }
})