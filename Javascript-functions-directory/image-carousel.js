let currentImageIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.carousel-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images.forEach((image, index) => {
        image.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}