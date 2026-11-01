
const form = document.getElementById("create-task-form");

function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task.description;

    document.getElementById("tasks").appendChild(li);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description");

    const task = {
        description: input.value
    };

    buildToDo(task);

    form.reset();
});
