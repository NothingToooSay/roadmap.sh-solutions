const closeBtn = document.querySelector(".closeBtn");
const cookieBtn = document.querySelector(".cookieBtn");
const cookie = document.querySelector(".cookie");

const container = document.querySelector(".container");
const newDiv = document.createElement("div");

const userObj = {
    username: "Maria",
    email: "maria123@gmail.com",
};

window.onload = function () {
    console.log("page is loaded");

    setTimeout(() => {
        console.log("Hallo Pageee!");

        cookie.classList.remove("hidden");
    }, 1500);

    closeBtn.addEventListener("click", () => {
        cookie.classList.add("hidden");
    });

    cookieBtn.addEventListener("click", () => {
        // maybe add some methods for key(index),buttt

        localStorage.setItem("user[index]", JSON.stringify(userObj));
        cookie.classList.add("hidden");

        setTimeout(() => {
            const user = JSON.parse(localStorage.getItem("user[index]"));

            newDiv.textContent = `Hallo from localStorage, ${user.username}`;
            newDiv.style.backgroundColor = "lightblue";
            newDiv.style.color = "white";
            newDiv.style.margin = "10px";
            newDiv.style.padding = "10px 15px";
            newDiv.style.fontSize = "1.2rem";
            newDiv.style.borderRadius = "20px;";

            document.body.appendChild(newDiv);
        }, 2000);
    });
};
