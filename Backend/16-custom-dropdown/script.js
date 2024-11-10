document.addEventListener("DOMContentLoaded", () => {
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownOptions = document.querySelector(".dropdown-options");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownSelected.addEventListener("click", () => {
        dropdownOptions.style.display =
            dropdownOptions.style.display === "block" ? "none" : "block";
    });

    dropdownItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            dropdownSelected.textContent = event.target.textContent;

            dropdownOptions.style.display = "none";

            dropdownItems.forEach((i) => i.classList.remove("selected"));
            event.target.classList.add("selected");
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            dropdownOptions.style.display = "none";
        }
    });
});
