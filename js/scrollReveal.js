/*==========================================================
SCROLL REVEAL
==========================================================*/

const revealElements=document.querySelectorAll(

".section-heading,.hero-left,.hero-right,.project-showcase,.about-grid,.quality-grid,.why-grid,.timeline-step"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},{

threshold:.15

});

revealElements.forEach(el=>{

revealObserver.observe(el);

});
