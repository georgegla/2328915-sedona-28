const telOpenNav=()=>{const e=document.querySelector(".main-nav"),a=document.querySelector(".main-nav__toggle");e.classList.remove("main-nav--nojs"),a.addEventListener("click",(()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened")):(e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))}))},activeMap=()=>{const e=document.querySelector(".sedona-map__image"),a=document.querySelector(".sedona-map__iframe");e.classList.remove("sedona-map__image--no-js"),a.classList.remove("sedona-map__iframe--no-js")};telOpenNav(),activeMap();