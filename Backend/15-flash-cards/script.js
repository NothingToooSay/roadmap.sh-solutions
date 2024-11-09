const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const answerBtn = document.querySelector(".answer-btn");
const cardQuestion = document.querySelectorAll(".card-question");
const cardAnswer = document.querySelectorAll(".card-answer");
const cards = document.querySelectorAll(".item");
const progressBar = document.querySelector(".progress-bar");
const countDisplay = document.querySelector(".count");

let currentCard = 0;

function render() {
    cards.forEach((card, index) => {
        if (index === currentCard) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });

    answerBtn.textContent = "Show Answer";

    cardAnswer[currentCard].classList.add("hidden");
    cardQuestion[currentCard].classList.remove("hidden");
    updateProgress();
}

function updateProgress() {
    const progress = ((currentCard + 1) / cards.length) * 100;
    progressBar.style.width = `${progress}%`;
    countDisplay.textContent = `${currentCard + 1} of ${cards.length}`;
}

answerBtn.addEventListener("click", () => {
    if (cardAnswer[currentCard].classList.contains("hidden")) {
        answerBtn.textContent = "Hide Answer";
        cardAnswer[currentCard].classList.remove("hidden");
        cardQuestion[currentCard].classList.add("hidden");
    } else {
        answerBtn.textContent = "Show Answer";
        cardAnswer[currentCard].classList.add("hidden");
        cardQuestion[currentCard].classList.remove("hidden");
    }
});

previousBtn.addEventListener("click", () => {
    if (currentCard > 0) {
        currentCard--;
        render();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentCard < cards.length - 1) {
        currentCard++;
        render();
    }
});

render();
