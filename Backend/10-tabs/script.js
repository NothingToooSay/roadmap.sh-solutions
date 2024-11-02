const links = document.querySelectorAll(".link");
const tabs = document.querySelectorAll(".tab");

links[0].classList.add("activeLink");
tabs[0].classList.remove("hidden");

links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        links.forEach((item) => item.classList.remove("activeLink"));
        link.classList.add("activeLink");

        tabs.forEach((tab) => tab.classList.add("hidden"));
        tabs[index].classList.remove("hidden");
    });
});
