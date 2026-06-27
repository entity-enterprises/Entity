/*==========================================================
ENTITY HERO
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroParallax();

    initHeroCounters();

    initFloatingCard();

});

/*==========================================================

Mouse Parallax

==========================================================*/

function initHeroParallax(){

    const hero=document.querySelector(".hero");

    const image=document.querySelector(".hero-image");

    const card=document.querySelector(".floating-project-card");

    if(!hero || !image) return;

    hero.addEventListener("mousemove",(e)=>{

        const rect=hero.getBoundingClientRect();

        const x=(e.clientX-rect.left)/rect.width-.5;

        const y=(e.clientY-rect.top)/rect.height-.5;

        image.style.transform=`
            translate(${x*20}px,${y*20}px)
        `;

        if(card){

            card.style.transform=`
                translate(${x*35}px,${y*35}px)
            `;

        }

    });

    hero.addEventListener("mouseleave",()=>{

        image.style.transform="translate(0,0)";

        if(card){

            card.style.transform="translate(0,0)";

        }

    });

}

/*==========================================================

Animated Counters

==========================================================*/

function initHeroCounters(){

    const numbers=document.querySelectorAll(".hero-stat h2");

    if(!numbers.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.7

    });

    numbers.forEach(n=>observer.observe(n));

}

function animateCounter(element){

    const text=element.innerText;

    const target=parseInt(text.replace(/\D/g,""));

    const suffix=text.replace(/[0-9]/g,"");

    let current=0;

    const increment=Math.max(1,target/80);

    const timer=setInterval(()=>{

        current+=increment;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        element.innerText=Math.floor(current)+suffix;

    },18);

}

/*==========================================================

Floating Card

==========================================================*/

function initFloatingCard(){

    const card=document.querySelector(".floating-project-card");

    if(!card) return;

    let direction=1;

    let offset=0;

    setInterval(()=>{

        offset+=0.15*direction;

        card.style.marginTop=offset+"px";

        if(offset>8) direction=-1;

        if(offset<-8) direction=1;

    },16);

}
