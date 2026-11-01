document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task.description;

    document.querySelector("#tasks").appendChild(li);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.querySelector("#new-task-description");

    const task = {
        description: input.value
    };

    buildToDo(task);
    form.reset();
});// your code here
});


