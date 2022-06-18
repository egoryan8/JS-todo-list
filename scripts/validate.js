const setDisableBtn = () => {
  todoSubmitButton.classList.add('todos__submit-btn_disabled');
  todoSubmitButton.setAttribute('disabled', true);
};

const setEnableBtn = () => {
  todoSubmitButton.classList.remove('todos__submit-btn_disabled');
  todoSubmitButton.removeAttribute('disabled', true);
};

const showInputError = () => {
  todoInputElement.classList.add('todos__input_type_error');
  errorElement.textContent = todoInputElement.validationMessage;
  errorElement.classList.add('todoes__error_visible');
};

const hideInputError = () => {
  todoInputElement.classList.remove('todos__input_type_error');
  errorElement.classList.remove('todoes__error_visible');
  errorElement.textContent = '';
};

todoInputElement.addEventListener('input', () => {
  if (!todoInputElement.validity.valid) {
    setDisableBtn();
    showInputError();
  } else {
    setEnableBtn();
    hideInputError();
  }
});
