let index = 0;
const slides = document.getElementById("slides");

if (slides) {
    const total = slides.children.length;

    function moverCarrusel() {
        index = (index + 1) % total;
        slides.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            slides.classList.remove("transition");
        }, 600);
    }

    setInterval(moverCarrusel, 3000); 
}
