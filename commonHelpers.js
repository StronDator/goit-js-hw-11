import{i as d,S as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g=new URL("/goit-js-hw-11/assets/octagon-eaf41606.svg",self.location).href,y=new URL("/goit-js-hw-11/assets/x-c55d42bc.svg",self.location).href;function n(o=""){d.show({titleColor:"#FFF",titleSize:"16px",message:o,messageColor:"#FFF",messageSize:"16px",maxWidth:"462px",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,progressBarColor:"#FFBEBE",timeout:5e3,targetFirst:!1,close:!1,buttons:[[`<button type="button" id="izi-close-button">
                 <img src="${y}" alt="" width="16px" height="16px" />
              </button>`,function(a,s){a.hide({},s,"buttonName")}]]});let t=document.querySelector(".iziToast.fadeInUp");t.style.paddingTop="20px",t.style.paddingBottom="20px",t=document.querySelector(".iziToast>.iziToast-body .iziToast-texts"),t.style.maxWidth="322px"}const c=document.querySelector(".gallery"),f={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom"},h=new m(".gallery a",f);function b(o){const{largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:l,downloads:u}=o;return`
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${a}" alt="${s}" />
      <ul class="property-list">
        <li class="property-item">
          <p class="property-title">Likes</p>
          <p class="property-value">${e}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Views</p>
          <p class="property-value">${r}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Comments</p>
          <p class="property-value">${l}</p>
        </li>
        <li class="property-item">
          <p class="property-title">Downloads</p>
          <p class="property-value">${u}</p>
        </li>
      </ul>  
    </a>`}function w(o){if(o.hits.length===0){c.innerHTML="",n("Sorry, there are no images matching your search query. Please try again!");return}const t=o.hits.map(b).join("");c.innerHTML=t,h.refresh()}const i=document.querySelector(".search-btn");document.querySelector(".loading-message");const p=document.querySelector(".loader");function L(o){p.style.display="block",i.disabled=!0,i.blur(),E.innerHTML="",S(o).then(t=>w(t)).catch(t=>{console.error(t),n("Error fetching images. Please try again later.")}).finally(()=>{p.style.display="none",i.disabled=!1})}function S(o){const a={key:"41460845-2ab95350f4581127087fd5faf",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},s=new URLSearchParams(a);return fetch(`https://pixabay.com/api/?${s.toString()}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(e.hits&&e.hits.length>0)return e;throw new Error("No images found.")}).catch(e=>{throw console.error("Fetch error:",e),n("Error fetching images. Please try again later."),e})}const E=document.querySelector(".gallery");document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".search-form"),t=document.querySelector(".loading-message");if(!o||!t){console.error("Form or loading message element not found.");return}t.style.display="none",o.addEventListener("submit",async a=>{a.preventDefault();const s=o.elements.search.value.trim();if(!s){n("Search must be filled!");return}o.reset();try{t.style.display="block",await L(s)}catch(e){console.error("Error downloading images:",e.message),n("Error downloading images. Please try again later.")}finally{t.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map
