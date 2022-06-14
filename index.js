const todoFormElement = document.querySelector('.todos__form');
const todoInputElement = document.querySelector('.todos__input');
const todoSubmitButton = document.querySelector('.todos__submit-btn');
const todoList = document.querySelector('.todos__list');

const deleteTodo = (evt) => {
  const todo = evt.currentTarget.closest('.todo');
  todo.style.transform = 'translateX(-200%)';
  todo.style.opacity = '0';
  todo.addEventListener('transitionend', () => todo.remove());
};

const createTodo = (text) => {
  const todoTemplateElement = document.querySelector('.todo-template').content;
  const todo = todoTemplateElement.querySelector('.todo').cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', (evt) => deleteTodo(evt));

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
