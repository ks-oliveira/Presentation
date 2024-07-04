var path = window.location.origin + window.location.pathname
var slides = length("section")
var totalSlides = slides.length
var currentSlide = slidePosition()


window.addEventListener("keydown", function (e) {
    if ("Escape" === e.key) {
        return presentationMode()
    }
})

function presentationMode() {
    var e = document.documentElement;
    e.classList.toggle("notfullscreen"), e.classList.toggle("fullscreen")
}

function length(e) {
    e = document.querySelectorAll(e);
    return 1 < e.length ? e : e[0]
}

function slidePosition() {
    var lastUrlPath = +window.location.hash.split('-').pop()
    return currentSlide = (lastUrlPath <= totalSlides ? lastUrlPath : 0) || 1
}

function slideMove(position) {
    location.replace(path + '#slide-' + position)
    currentSlide = slidePosition()
}


window.addEventListener("keydown", function (e) {
    if ("ArrowLeft" === e.key) {
        currentSlide === 1 ? slideMove(totalSlides) : slideMove(currentSlide - 1)
    }
    if ("ArrowRight" === e.key) {
        currentSlide === totalSlides ? slideMove(1) : slideMove(currentSlide + 1)
    }
})

