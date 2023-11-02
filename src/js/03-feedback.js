const form = document.querySelector('.feedback-form');

form.addEventListener('input', inInput);

function inInput(evt) {
  const inputName = evt.target.name;
  const inputValue = evt.target.value;
  localStorage.setItem(inputName, inputValue);
}




