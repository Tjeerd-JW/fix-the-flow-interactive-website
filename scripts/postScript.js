let heart = document.getElementById("heart");
var heartLove = document.getElementById("heart-love");
let tomato = document.getElementById("tomato");
var tomatoThrow = document.getElementById("tomato-throw");
let star = document.getElementById("star");
var starSparkle = document.getElementById("star-sparkle");

heart.addEventListener("click", heartHandler)
heart.addEventListener("animationend", heartHandler)

function heartHandler() {
    heart.classList.toggle("love");
}

tomato.addEventListener("click", tomatoHandler)
tomatoThrow.addEventListener("animationend", tomatoHandler)

function tomatoHandler() {
    tomatoThrow.classList.toggle("throw");
}

star.addEventListener("click", starHandler)
starSparkle.addEventListener("animationend", starHandler)

function starHandler() {
    starSparkle.classList.toggle("sparkle");
}