function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((element) => {
    list.innerHTML += `
  <li class="todo-list list-group-item d-flex justify-content-between align-items-center">${element.task}
                        <span class="badge bg-primary rounded-pill">
                          <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </span>
                    </li>`;
  });
  eventListenerAdder();
}

function eventListenerAdder() {
  let liElementCheckButton = document.querySelectorAll(".fa-check");
  let liToDoElement = document.querySelectorAll("li.todo-list");
  liElementCheckButton.forEach((checkButton, index) => {
    checkButton.addEventListener("click", () => {
      if (liToDoElement[index].style.textDecorationLine === "") {
        liToDoElement[index].style.textDecorationLine = "line-through";
      } else liToDoElement[index].style.textDecorationLine = "";
    });
  });
  let liElementDeleteButton = document.querySelectorAll(".fa-trash");
  liElementDeleteButton.forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      liToDoElement[index].remove();
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "catch fish", completed: false },
  { task: "sleep", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  let inputnewTodo = document.querySelector("#todoInput");
  let inputDueDate = document.querySelector("#dueDate");
  let ulList = document.getElementById("todo-list");
  let renderDate;
  let daysToDeadline = deadlineInDays(`${inputDueDate.value}`);
  //checking if there is any due date
  if (inputDueDate.value === "") {
    renderDate = "Not set";
  } else {
    renderDate = inputDueDate.value;
  }
  //checking if todo name entered,if not an alert will be displayed, if there is then li element will be created for this todo
  if (inputnewTodo.value.length > 0) {
    ulList.innerHTML =
      ulList.innerHTML +
      `
  <li class="todo-list list-group-item d-flex justify-content-between align-items-center">${inputnewTodo.value} Due Date:  ${renderDate}  ${daysToDeadline} days left 
                        <span class="badge bg-primary rounded-pill">
                          <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </span>
                    </li>`;
    inputnewTodo.value = "";
    eventListenerAdder();
    deleteAllCompletedTodos();
  } else {
    alert("Please enter a todo before clicking button");
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
deleteAllCompletedTodos();
function deleteAllCompletedTodos() {
  let deleteButton = document.getElementById("deleteAllCompleted");
  let allToDoLists = document.querySelectorAll("ul li.list-group-item");
  deleteButton.addEventListener("click", (event) => {
    allToDoLists.forEach((todo) => {
      if (todo.style.textDecorationLine === "line-through") {
        todo.remove();
      }
    });
    event.preventDefault();
  });
}

function deadlineInDays(dueDate) {
  const currentDate = new Date();
  const currentDateInMs = currentDate.getTime();
  const dueDateToISOFormat = new Date(dueDate);
  const dueDateInMs = dueDateToISOFormat.getTime();
  const daysToDueDateInMs = dueDateInMs - currentDateInMs;
  const daysToDueDateInDays = Math.round(
    daysToDueDateInMs / (24 * 60 * 60 * 1000)
  );
  return daysToDueDateInDays;
}
