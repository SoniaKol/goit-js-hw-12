import{S as u,i as f}from"./assets/vendor-fb58b070.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const n=document.querySelector(".loader");function g(s){return s.map(({webformatURL:i,largeImageURL:c,tags:r,likes:e,views:t,comments:o,downloads:m})=>`<li class="img-card">
      <a class="img-card-link" href="${c}"><img src="${i}" alt="${r}" class="img-card-image" /></a>
        <ul class="img-card-container">
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Likes</h4>
            <p class="img-card-descr-text">${e}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Views</h4>
            <p class="img-card-descr-text">${t}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Comments</h4>
            <p class="img-card-descr-text">${o}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Downloads</h4>
            <p class="img-card-descr-text">${m}</p>
          </li>
        </ul>
      </li>`).join("")}function h(){n.style.visibility="visible"}function l(){n.style.visibility="hidden"}function p(s){a.innerHTML="",h();const i=new u(".img-card a"),c=new URLSearchParams({key:"44792163-757e44859b12a96dc64963414",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${c}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{y(r.hits)&&(l(),a.innerHTML=g(r.hits),i.refresh())}).catch(r=>console.log(r)).finally(()=>d.reset())}function y(s){if(s.length===0){f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),l();return}return!0}const d=document.querySelector(".form"),a=document.querySelector(".img-list");d.addEventListener("submit",b);function b(s){s.preventDefault();const i=s.target.elements[0].value.trim();i&&p(i)}
//# sourceMappingURL=commonHelpers.js.map
