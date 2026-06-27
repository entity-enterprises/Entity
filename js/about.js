/*==========================================================

ABOUT PAGE

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(

".mission-card,.value-card,.leader-card,.trust-card,.journey-item,.stat-box"

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
