const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

const todos = [];

function renderTodo() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    todoList.innerHTML += `
  <li class="flex items-center gap-5">
  <input type="checkbox" />
  ${todo}
  <button class="bg-red-500 p-1 text-white ml-10">X</button>
  </li>
  `;
  });
}

function addTodo(e) {
  e.preventDefault();

  const inputText = e.target.elements.todoInput.value;
  console.log(e);
  todos.push(inputText);
  console.log("Todo ========>", todos);
  renderTodo();
  e.target.reset();
}

todoForm.addEventListener("submit", addTodo);
