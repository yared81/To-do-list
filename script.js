function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = function() { this.remove(); };

    taskList.appendChild(li);
    taskInput.value = "";
}
