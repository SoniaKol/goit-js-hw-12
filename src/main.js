import searchImg from './js/pixabay-api';
import 'modern-normalize/modern-normalize.css';

const form = document.querySelector('.form');
const list = document.querySelector('.img-list');

form.addEventListener('submit', formHandler);

function formHandler(evt) {
  evt.preventDefault();

  const req = evt.target.elements[0].value.trim();
  if (!req) return;

  searchImg(req);
}

export { list, form };
