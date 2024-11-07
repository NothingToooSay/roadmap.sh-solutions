const button = document.querySelector(".btn");
const birthdateInput = document.querySelector(".age-calculator");
const result = document.querySelector(".result");

const picker = datepicker("#date-picker", {
    formatter: (input, date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        input.value = `${day}.${month}.${year}`;
    },
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!birthdateInput.value) {
        result.textContent = `Please select your birth date =)`;
        return;
    } else {
        const dt = luxon.DateTime.now();
        const birthDate = luxon.DateTime.fromFormat(
            birthdateInput.value,
            "dd.MM.yyyy"
        );

        let age = dt.year - birthDate.year;

        result.textContent = `You are ${age} years old`;
    }
});
