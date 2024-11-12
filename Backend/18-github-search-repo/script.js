const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownOptions = document.querySelector(".dropdown-options");
const repositoryDisplay = document.querySelector(".repository");
const refreshButton = document.querySelector(".refresh-btn");

let selectedLanguage = null;

dropdownSelected.addEventListener("click", () => {
    dropdownOptions.classList.toggle("show");
});

dropdownOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-item")) {
        selectedLanguage = event.target.textContent;
        dropdownSelected.textContent = selectedLanguage;
        repositoryDisplay.innerHTML = "<p class='text'>Loading...</p>";
        fetchRandomRepository(selectedLanguage);
        dropdownOptions.classList.remove("show");
    }
});

refreshButton.addEventListener("click", () => {
    if (selectedLanguage) {
        repositoryDisplay.innerHTML = "<p class='text'>Loading...</p>";
        fetchRandomRepository(selectedLanguage);
    } else {
        repositoryDisplay.innerHTML =
            "<p class='text'>Please select a Language</p>";
    }
});

async function fetchRandomRepository(language) {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=100`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data from GitHub API");
        }
        const data = await response.json();
        console.log(data);

        if (data.items && data.items.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.items.length);
            const repo = data.items[randomIndex];

            displayRepository(repo);
        } else {
            repositoryDisplay.innerHTML =
                "<p class='text'>No repositories found for this language.</p>";
        }
    } catch (error) {
        repositoryDisplay.innerHTML = `<p class='text'>Error: ${error.message}</p>`;
    }
}

function displayRepository(repo) {
    repositoryDisplay.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
        <p>⭐ Stars: ${repo.stargazers_count}</p>
        <p>🍴 Forks: ${repo.forks_count}</p>
        <p>🐛 Open Issues: ${repo.open_issues_count}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;
}
