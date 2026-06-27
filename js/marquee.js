/*==========================================================

CLIENT MARQUEE

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const marquee=document.querySelector(".client-track");

if(!marquee) return;

const clone=marquee.innerHTML;

marquee.innerHTML+=clone;

});
