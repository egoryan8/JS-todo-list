const todoFormElement = document.querySelector('.todos__form');
const todoInputElement = document.querySelector('.todos__input');
const todoSubmitButton = document.querySelector('.todos__submit-btn');
const todoList = document.querySelector('.todos__list');

let editedTodo = null;

const getTodoByEvent = (evt) => evt.currentTarget.closest('.todo');

const deleteTodo = (evt) => {
  const todo = getTodoByEvent(evt);
  todo.style.transform = 'translateX(-200%)';
  todo.style.opacity = '0';
  todo.addEventListener('transitionend', () => todo.remove());
};

const editTodo = (evt) => {
  const todo = getTodoByEvent(evt);

  editedTodo = todo;

  todoInputElement.value = todo.querySelector('.todo__text').textContent;
  todoInputElement.style.boxShadow = '0px 0px 50px rgb(7, 119, 246)';
  todoSubmitButton.textContent = 'Сохранить';
};

const addTodoListeners = (todo) => {
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', deleteTodo);
  todo.querySelector('.todo__btn_type_edit').addEventListener('click', editTodo);
  todo.querySelector('.todo__btn_type_duplicate').addEventListener('click', duplicateTodo);
};

const createTodo = (text) => {
  const todoTemplateElement = document.querySelector('.todo-template').content;
  const todo = todoTemplateElement.querySelector('.todo').cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;
  addTodoListeners(todo);
  return todo;
};

const addTodo = (text) => {
  const todo = createTodo(text);
  todoList.append(todo);
};

const duplicateTodo = (evt) => {
  const todo = getTodoByEvent(evt);

  const duplicatedTodo = todo.cloneNode(true);

  todo.after(duplicatedTodo);
  addTodoListeners(duplicatedTodo);
};

const handleTodoSubmit = (evt) => {
  evt.preventDefault();

  const text = todoInputElement.value;

  if (editedTodo) {
    editedTodo.querySelector('.todo__text').textContent = text;
    todoSubmitButton.textContent = 'Добавить';
    editedTodo = null;
    todoInputElement.style.boxShadow = 'none';
  } else {
    addTodo(text);
  }

  todoFormElement.reset();
};

todoFormElement.addEventListener('submit', handleTodoSubmit);
