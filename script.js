function addTask() {
    let taskText = document.getElementById("taskText").value;
    if (taskText.trim() === "") return;

    let task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");
    task.setAttribute("id", "task-" + new Date().getTime());
    task.innerText = taskText;

    task.addEventListener("dragstart", drag);

    document.querySelector("#todo .task-list").appendChild(task);
    document.getElementById("taskText").value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let taskId = event.dataTransfer.getData("text");
    let taskElement = document.getElementById(taskId);

    if (taskElement) {
        event.target.closest(".task-list").appendChild(taskElement);
    }
}

function toggleTheme() {
    let body = document.body;
    let button = document.getElementById("themeToggle");

    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("light-mode")) {
        button.innerText = "🌙 Modo Escuro";
        localStorage.setItem("theme", "light");
    } else {
        button.innerText = "🌞 Modo Claro";
        localStorage.setItem("theme", "dark");
    }
}

// Mantém o tema escolhido ao recarregar a página
document.getElementById("themeToggle").addEventListener("click", toggleTheme);
if (localStorage.getItem("theme") === "light") {
    toggleTheme();
}

