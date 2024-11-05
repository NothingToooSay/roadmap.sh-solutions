const element = document.querySelector(".element");
const paragraph = document.querySelector(".paraph");
const arrow = document.querySelector(".arrow");

element.addEventListener("click", () => {
    if (paragraph.classList.contains("visible")) {
        paragraph.classList.remove("visible");
        arrow.classList.remove("rotate");
    } else {
        paragraph.classList.add("visible");
        arrow.classList.add("rotate");
    }
});
