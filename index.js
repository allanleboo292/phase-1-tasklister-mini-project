
const form = document.getElementById("create-task-form");

function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task.description;
    document.getElementById("task").appendChild(li);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = event.target.querySelector(
        '[name="new-task-description"]'
    );

    const task = {
        description: input.value
    };

    buildToDo(task);
});
