const downloaderContainer = document.querySelector('.loader');

function createMarkUp(arr) {
  return arr
    .map(
      ({
        webformatURL: img,
        largeImageURL: originalImg,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="img-card">
      <a class="img-card-link" href="${originalImg}"><img src="${img}" alt="${tags}" class="img-card-image" /></a>
        <ul class="img-card-container">
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Likes</h4>
            <p class="img-card-descr-text">${likes}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Views</h4>
            <p class="img-card-descr-text">${views}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Comments</h4>
            <p class="img-card-descr-text">${comments}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Downloads</h4>
            <p class="img-card-descr-text">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');
}

function loaderVisibly() {
  downloaderContainer.style.visibility = 'visible';
}

function loaderHidden() {
  downloaderContainer.style.visibility = 'hidden';
}

export { createMarkUp, loaderVisibly, loaderHidden };
