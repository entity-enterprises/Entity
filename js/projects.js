/*==========================================================

PROJECT VIEWER

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const lightbox=document.getElementById("projectLightbox");

if(!lightbox) return;

const image=document.getElementById("lightboxImage");
const title=document.getElementById("lightboxTitle");
const category=document.getElementById("lightboxCategory");
const location=document.getElementById("lightboxLocation");

const cards=document.querySelectorAll(".portfolio-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

image.src=card.querySelector("img").src;

title.textContent=card.querySelector("h3").textContent;

category.textContent=card.querySelector("span").textContent;

location.textContent=card.querySelector("p").textContent;

lightbox.classList.add("active");

});

});

document.getElementById("lightboxClose").onclick=()=>{

lightbox.classList.remove("active");

};

lightbox.querySelector(".lightbox-overlay").onclick=()=>{

lightbox.classList.remove("active");

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

});

});
