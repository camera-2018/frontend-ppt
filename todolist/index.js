let taskList = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (task) {
    taskList.push(task);
    taskInput.value = "";
  }
  renderTaskList();
}

function renderTaskList() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  for (let i = 1; i <= taskList.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = taskList[i - 1];
    listItem.appendChild(createDeleteButton(i - 1));
    taskListElement.appendChild(listItem);
  }
}

function createDeleteButton(index) {
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.onclick = function () {
    deleteTask(index);
  };
  return button;
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}
