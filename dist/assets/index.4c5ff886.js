var M=Object.defineProperty;var I=(i,e,t)=>e in i?M(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>(I(i,typeof e!="symbol"?e+"":e,t),t),N=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var m=(i,e,t)=>(N(i,e,"read from private field"),t?t.call(i):e.get(i)),r=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},p=(i,e,t,n)=>(N(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var l=(i,e,t)=>(N(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const T=document.querySelector("#theme-switcher");function q(){document.body.classList.add("theme-dark")}function V(){document.body.classList.remove("theme-dark")}function $(){document.body.classList.contains("theme-dark")===!0?V():q()}T.onclick=$;var a,v,w,L,j,E,_,b,B,h,y,u,g;class R{constructor(){r(this,v);r(this,L);r(this,E);r(this,b);r(this,h);r(this,u);r(this,a,0);c(this,"slides",null);c(this,"buttonPrev",null);c(this,"buttonNext",null);c(this,"prevSlideHandler",e=>{l(this,v,w).call(this,m(this,a)-1)});c(this,"nextSlideHandler",e=>{l(this,v,w).call(this,m(this,a)+1)});c(this,"handleAnimationEnd",e=>{e.animationName.includes("in")&&(e.target.style.visibility="visible",this.changing=!1),e.animationName.includes("out")&&(e.target.style.visibility=null),e.target.classList.remove(`slider--${e.animationName}`)});const e=document.querySelectorAll(".projects__project-list-item");this.changing=!1,this.slides=Array.from(e),this.buttonPrev=document.querySelector(".projects__button-prev"),this.buttonNext=document.querySelector(".projects__button-next"),this.buttonPrev.addEventListener("click",this.prevSlideHandler),this.buttonNext.addEventListener("click",this.nextSlideHandler),l(this,h,y).call(this,this.buttonPrev),this.slides.forEach((t,n)=>{n===m(this,a)&&(t.style.visibility="visible"),t.addEventListener("animationend",this.handleAnimationEnd)})}set currentSlideIndex(e){l(this,L,j).call(this,e,m(this,a)),p(this,a,e)}destroy(){this.buttonPrev.removeEventListener("click",this.prevSlideHandler),this.buttonNext.removeEventListener("click",this.nextSlideHandler),l(this,u,g).call(this,this.buttonNext),this.slides.forEach((e,t)=>{e.style.visibility=null,e.removeEventListener("animationend",this.handleAnimationEnd)})}}a=new WeakMap,v=new WeakSet,w=function(e){const t=this.slides.length-1,n=0;this.changing===!0||e>t||e<n||(e===t?l(this,h,y).call(this,this.buttonNext):e===n?l(this,h,y).call(this,this.buttonPrev):(l(this,u,g).call(this,this.buttonPrev),l(this,u,g).call(this,this.buttonNext)),this.changing=!0,this.currentSlideIndex=e)},L=new WeakSet,j=function(e,t){const n=this.slides[t],s=this.slides[e],o=l(this,E,_).call(this,e,t),d=l(this,b,B).call(this,"leave",o),C=l(this,b,B).call(this,"enter",o);n.classList.add(d),s.classList.add(C)},E=new WeakSet,_=function(e,t){return e>t?"left":"right"},b=new WeakSet,B=function(e="enter",t){return e==="leave"?`slider--slide-out-${t}`:`slider--slide-in-${t}`},h=new WeakSet,y=function(e){e.classList.add("base-button--disabled")},u=new WeakSet,g=function(e){e.classList.remove("base-button--disabled")};var f,O,k,x,A,H,S,D;class F{constructor(e){r(this,f);r(this,k);r(this,A);r(this,S);this.slider=null,this.id=e,this.el=document.querySelector(e),this.closeButton=this.el.querySelector(".base-dialog__button-close"),this.handleCloseButtonClick=()=>{this.close(),document.removeEventListener("click",this.handleClickOutside)},this.closeButton.addEventListener("click",this.handleCloseButtonClick),this.handleClickOutside=({clientX:t,clientY:n})=>{l(this,S,D).call(this,t,n)||(this.close(),document.removeEventListener("click",this.handleClickOutside))},this.handleEnterAnimationEnd=t=>{this.prependEnterAnimationClass()},this.handleLeaveAnimationEnd=t=>{this.prependLeaveAnimationClass()}}appendEnterAnimationClass(){this.el.classList.add("base-dialog--enter-animation"),this.el.addEventListener("animationend",this.handleEnterAnimationEnd)}prependEnterAnimationClass(){this.el.classList.remove("base-dialog--enter-animation"),this.el.removeEventListener("animationend",this.handleEnterAnimationEnd),p(this,f,!0,O)}appendLeaveAnimationClass(){this.el.classList.add("base-dialog--leave-animation"),this.el.addEventListener("animationend",this.handleLeaveAnimationEnd)}prependLeaveAnimationClass(){this.el.classList.remove("base-dialog--leave-animation"),this.el.removeEventListener("animationend",this.handleLeaveAnimationEnd),this.el.close()}open(){this.el.showModal(),this.appendEnterAnimationClass(),l(this,k,x).call(this),this.slider=new R}close(){this.slider.destroy(),this.appendLeaveAnimationClass(),l(this,A,H).call(this),p(this,f,!1,O)}}f=new WeakSet,O=function(e){e===!0&&document.addEventListener("click",this.handleClickOutside)},k=new WeakSet,x=function(){document.body.style.height="100vh",document.body.style.overflow="hidden"},A=new WeakSet,H=function(){document.body.style.removeProperty("height"),document.body.style.removeProperty("overflow")},S=new WeakSet,D=function(e,t){const n=this.el.getBoundingClientRect(),s=n.top<=t,o=n.top+n.height>=t,d=n.left<=e,C=n.left+n.width>=e;return s&&o&&d&&C};function P(i,...e){const t=new F(i);e.forEach(([n,s])=>{document.querySelector(n).addEventListener("click",()=>s(t))})}const K=document.querySelector("#contact-button"),z=document.querySelector("#contact");K.addEventListener("click",()=>{z.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})});const G=window.matchMedia("(prefers-color-scheme: dark)").matches;G===!0&&q();P("#dialog-projects",["#project-button",i=>i.open()],["#project-button-small",i=>{document.getElementById("work").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),setTimeout(()=>i.open(),350)}]);P("#dialog-imprint",["#imprint-button",i=>i.open()]);P("#dialog-privacy",["#privacy-button",i=>i.open()]);