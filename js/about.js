/*==========================================================

ABOUT PAGE

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(

".info-card,.leader-row-card,.journey-node,.value-item-card,.service-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards",

easing:"ease"

});

observer.unobserve(entry.target);

}

});

});

cards.forEach(card=>observer.observe(card));

});
