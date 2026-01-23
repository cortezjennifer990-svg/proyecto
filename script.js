const slides = document.getElementById("slides");
let scrollAmount = 0;

function moverSlider() {
    scrollAmount += 1;
    slides.scrollLeft = scrollAmount;

    if (scrollAmount >= slides.scrollWidth - slides.clientWidth) {
        scrollAmount = 0;
    }
}

setInterval(moverSlider, 20);
