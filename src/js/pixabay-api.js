import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { list, form } from '../main.js';
import {
  createMarkUp,
  loaderHidden,
  loaderVisibly,
} from './render-functions.js';

function searchImg(request) {
  list.innerHTML = '';
  loaderVisibly();

  const lightbox = new SimpleLightbox('.img-card a');

  const searchParams = new URLSearchParams({
    key: '44792163-757e44859b12a96dc64963414',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      if (checkResult(data.hits)) {
        loaderHidden();
        list.innerHTML = createMarkUp(data.hits);
        lightbox.refresh();
      }
    })
    .catch(err => console.log(err))
    .finally(() => form.reset());
}

function checkResult(arr) {
  if (arr.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: 'red',
      position: 'topRight',
    });
    loaderHidden();
    return;
  }

  return true;
}

export default searchImg;
