document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  function createTask(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () => {
      li.classList.add("fade-out");
      li.addEventListener("animationend", () => {
        li.remove();
      });
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTaskBtn.click();
  });
});