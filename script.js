let index = 0;
const slides = document.getElementById("slides");

if (slides) {
    const total = slides.children.length;

    function moverCarrusel() {
       slides.classList.add("moviendo");
       index = (index + 1) % total;
       slides.style.transform = `translateX(-${index * 100}%)`;
       setTimeout(() => {
           slides.classList.remove("moviendo");
       }, 600);
    }
    slides.style.transform="translateX(0%)";

    setInterval(moverCarrusel, 3000); 
}
