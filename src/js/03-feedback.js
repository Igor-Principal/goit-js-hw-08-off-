import { getFromLS, saveTolS } from './helpers';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(inInput, 500));


form.addEventListener('submit', onSubmit);

function inInput(evt) {
  const key = evt.target.name;
  const value = evt.target.value;
  saveTolS(key, value);
}

function onStart() {
  const email = getFromLS('email');
  const message = getFromLS('message');

  form.elements.email.value = email;
  form.elements.message.value = message;
}
onStart();

function onSubmit(evt) {
  evt.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const info = {
    email,
    message,
  };
  console.log(info);
form.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}
