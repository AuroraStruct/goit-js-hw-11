import{a as l,S as f,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com/api/";const d="56829703-aaca5ae656370ba926dd7df4b";async function m(s){return(await l.get("",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(t=>`
<li class="gallery-item">
<a class="gallery-link" href="${t.largeImageURL}">
<img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
</a>
<div class="info">
<p class="info-item"><b>Likes</b>${t.likes}</p>
<p class="info-item"><b>Views</b>${t.views}</p>
<p class="info-item"><b>Comments</b>${t.comments}</p>
<p class="info-item"><b>Downloads</b>${t.downloads}</p>
</div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function h(){u.style.display="block"}function b(){u.style.display="none"}const L=document.querySelector(".form");L.addEventListener("submit",w);async function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query"});return}g(),h();try{const t=await m(o);if(t.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b(),s.target.reset()}}
//# sourceMappingURL=index.js.map
