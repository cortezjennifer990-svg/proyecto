<script>
let index = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;

function moverCarrusel() {
    index++;
    if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moverCarrusel, 3000); // cambia cada 3 segundos
</script>
