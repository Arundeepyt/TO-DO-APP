document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("new-task");
  const taskList = document.querySelector(".task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.className = "task-text";
      span.innerText = taskText;

      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.innerText = "Delete";

      delBtn.addEventListener("click", () => {
        li.classList.add("fade-out");
        li.addEventListener("animationend", () => li.remove());
      });

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);

      taskInput.value = "";
    }
  });

  // Optional: Enter key triggers Add
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTaskBtn.click();
  });
});