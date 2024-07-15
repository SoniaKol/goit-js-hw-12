import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { list, form } from '../main.js';
import {
  createMarkUp,
  loaderHidden,
  loaderVisibly,
} from './render-functions.js';

async function searchImg(request) {
  list.innerHTML = '';
  loaderVisibly();

  const lightbox = new SimpleLightbox('.img-card a');

  axios.defaults.baseURL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: '44792163-757e44859b12a96dc64963414',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = (await axios.get(`?${searchParams}`)).data;

  try {
    if (checkResult(response.hits)) {
      loaderHidden();
      list.innerHTML = createMarkUp(response.hits);
      lightbox.refresh();
    }
  } catch (err) {
    console.log(err);
  } finally {
    form.reset();
  }
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
