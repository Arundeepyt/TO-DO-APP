document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.classList.add("task-item");

      const span = document.createElement("span");
      span.classList.add("task-text");
      span.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        li.remove(); // Works perfectly
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});