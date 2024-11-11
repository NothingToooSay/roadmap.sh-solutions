const input = document.querySelector(".input");
const enter = document.querySelector(".enter-btn");
const taskContainer = document.querySelector(".task-tracker");

let tasks = [];

function addTask() {
    if (input.value.trim() !== "") {
        let newTask = { description: input.value, status: false };
        tasks.push(newTask);
        input.value = "";
        renderTasks();
    }
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

enter.addEventListener("click", addTask);

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskStatus(index) {
    tasks[index].status = !tasks[index].status;
    renderTasks();
}

function renderTasks() {
    const existingTasks = document.querySelectorAll(".task");
    existingTasks.forEach((task) => task.remove());

    const sortedTasks = [...tasks].sort((a, b) => a.status - b.status);

    sortedTasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        taskElement.innerHTML = `
            <input type="checkbox" class="checkbox" ${
                task.status ? "checked" : ""
            } />
            <p class="text ${task.status ? "completed" : ""}">
                ${task.description}
            </p>
            <button class="trash-btn">
                <img src="../../assets/trash.svg" alt="trash-icon" />
            </button>
        `;

        const checkbox = taskElement.querySelector(".checkbox");
        const trashBtn = taskElement.querySelector(".trash-btn");

        checkbox.addEventListener("change", () =>
            toggleTaskStatus(tasks.indexOf(task))
        );
        trashBtn.addEventListener("click", () =>
            deleteTask(tasks.indexOf(task))
        );

        taskContainer.appendChild(taskElement);
    });
}

renderTasks();
