const elem = document.querySelector(".switch");
const div = document.querySelector(".container");
const body = document.body;

if (elem && div) {
    elem.addEventListener("change", () => {
        div.classList.toggle("active", elem.checked);

        if (elem.checked) {
            body.style.backgroundColor = "#c8c8c8";
        } else {
            body.style.backgroundColor = "#13161b";
        }
    });
} else {
    console.warn("Element(s) not found: ", { elem, div });
}
