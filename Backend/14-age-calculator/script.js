const button = document.querySelector(".btn");
const calendar = document.querySelector(".age-icon");
const birthdateInput = document.querySelector("age-calculator");
const result = document.querySelector(".result");

const picker = datepicker("#date-picker", {
    formatter: (input, date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        input.value = `${day}.${month}.${year}`;
    },
});

calendar.addEventListener("click", () => {
    picker.show();
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!birthdateInput.value) {
        result.textContent = `Please select your birth date =)`;
        return;
    }
});
