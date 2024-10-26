const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

let currentIndex = 1;

function render() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
            slide.classList.remove("hidden");
        } else if (
            index === (currentIndex - 1 + slides.length) % slides.length ||
            index === (currentIndex + 1) % slides.length
        ) {
            slide.classList.remove("active");
            slide.classList.remove("hidden");
        } else {
            slide.classList.remove("active");
            slide.classList.add("hidden");
        }
    });
}

render();

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    render();
});

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    render();
});
