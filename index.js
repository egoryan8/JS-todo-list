const todoFormElement = document.querySelector('.todos__form');
const todoInputElement = document.querySelector('.todos__input');
const todoSubmitButton = document.querySelector('.todos__submit-btn');
const todoList = document.querySelector('.todos__list');

const createTodo = (text) => {
  const todoTemplateElement = document.querySelector('.todo-template').content;
  const todo = todoTemplateElement.querySelector('.todo').cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;

  return todo;
};

const addTodo = (text) => {
  const todo = createTodo(text);
  todoList.append(todo);
};

const handleTodoSubmit = (evt) => {
  evt.preventDefault();

  const text = todoInputElement.value;

  addTodo(text);

  todoFormElement.reset();
};

todoFormElement.addEventListener('submit', handleTodoSubmit);
