function todoList(todos) {
  let content = document.querySelector("#content");
  content.innerHTML = "My to do list for this week";
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  todos.forEach((todoItem) => {
    let liElement = document.createElement("li");
    liElement.innerText = todoItem.todo;
    ulElement.appendChild(liElement);
    liElement.addEventListener("click", () => {
      liElement.classList.toggle("line-through");
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);


