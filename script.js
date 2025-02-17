document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return; // Prevent adding empty tasks

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    // Remove task when clicked
    li.addEventListener("click", function() {
        taskList.removeChild(this);
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
});
