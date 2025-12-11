let heart = document.getElementById("heart");
let heartLove = document.getElementById("heart-love");
let tomato = document.getElementById("tomato");
let tomatoThrow = document.getElementById("tomato-throw");
let star = document.getElementById("star");
let starSparkle = document.getElementById("star-sparkle");
let starTrail = document.querySelector('.rainbow');

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
    console.log('ster')
    starSparkle.classList.toggle("sparkle");
    starTrail.classList.toggle("trail")
}