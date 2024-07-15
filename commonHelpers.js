import{S as f,a as o,i as g}from"./assets/vendor-57a05cc6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const l=document.querySelector(".loader");function h(s){return s.map(({webformatURL:t,largeImageURL:c,tags:i,likes:e,views:r,comments:a,downloads:u})=>`<li class="img-card">
      <a class="img-card-link" href="${c}"><img src="${t}" alt="${i}" class="img-card-image" /></a>
        <ul class="img-card-container">
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Likes</h4>
            <p class="img-card-descr-text">${e}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Views</h4>
            <p class="img-card-descr-text">${r}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Comments</h4>
            <p class="img-card-descr-text">${a}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Downloads</h4>
            <p class="img-card-descr-text">${u}</p>
          </li>
        </ul>
      </li>`).join("")}function p(){l.style.visibility="visible"}function d(){l.style.visibility="hidden"}async function y(s){n.innerHTML="",p();const t=new f(".img-card a");o.defaults.baseURL="https://pixabay.com/api/";const c=new URLSearchParams({key:"44792163-757e44859b12a96dc64963414",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=(await o.get(`?${c}`)).data;try{b(i.hits)&&(d(),n.innerHTML=h(i.hits),t.refresh())}catch(e){console.log(e)}finally{m.reset()}}function b(s){if(s.length===0){g.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),d();return}return!0}const m=document.querySelector(".form"),n=document.querySelector(".img-list");m.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.target.elements[0].value.trim();t&&y(t)}
//# sourceMappingURL=commonHelpers.js.map
