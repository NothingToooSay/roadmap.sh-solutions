const counter = document.querySelector(".count");
const textarea = document.querySelector("#input");

textarea.addEventListener("input", updateCount);

function updateCount(e) {
    //     console.log(e.target.value.length);

    const length = e.target.value.length;
    counter.textContent = `${length} / 250`;

    if (length >= 250) {
        textarea.classList.add("textarea-limit-reached");
        counter.classList.add("active");
    } else {
        textarea.classList.remove("textarea-limit-reached");
        counter.classList.remove("active");
    }
}
