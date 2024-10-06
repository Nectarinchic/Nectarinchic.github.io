let index = 0;

const slides = document.querySelectorAll('.product-slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * (slides[0].clientWidth + 20); // 20px is the margin between slides
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
}
