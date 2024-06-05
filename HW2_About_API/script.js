document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");
    const images = document.querySelectorAll(".slider-img");
    let currentIndex = 0;

    function updateSlider(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    }

    function navigateToImage(index) {
        currentIndex = index;
        updateSlider(currentIndex);
    }

    prevBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => navigateToImage(index));
    });

    updateSlider(currentIndex);
});
