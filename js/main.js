/*==========================================================
ENTITY ENTERPRISES
Main Controller
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    if (typeof initNavbar === "function") {
        initNavbar();
    }

    loadFooter();

    if (typeof initHero === "function") {
        initHero();
    }
    if (typeof initLoader === "function") {
        initLoader();
    }
    initCursor();
    initReveal();
    initCounters();
    initScrollProgress();
    initSmoothAnchors();
    initHorizontalProjects();
    initServices();
    initTimeline();

});


/*==========================================================
Cursor
==========================================================*/

function initCursor() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a,button").forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");

        });

    });

}


/*==========================================================
Reveal
==========================================================*/

function initReveal() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: .15

    });

    elements.forEach(el => observer.observe(el));

}


/*==========================================================
Counters
==========================================================*/

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const increment = target / 80;

            const timer = setInterval(() => {

                value += increment;

                if (value >= target) {

                    value = target;
                    clearInterval(timer);

                }

                counter.textContent = Math.floor(value);

            }, 18);

            observer.unobserve(counter);

        });

    });

    counters.forEach(c => observer.observe(c));

}


/*==========================================================
Progress
==========================================================*/

function initScrollProgress() {

    let bar = document.querySelector(".scroll-progress");

    if (!bar) {

        bar = document.createElement("div");

        bar.className = "scroll-progress";

        document.body.appendChild(bar);

    }

    window.addEventListener("scroll", () => {

        const total = document.documentElement.scrollHeight - window.innerHeight;

        const progress = (window.scrollY / total) * 100;

        bar.style.width = progress + "%";

    });

}


/*==========================================================
Anchor
==========================================================*/

function initSmoothAnchors() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

}

/*==========================================================

Premium Loader

==========================================================*/

function initLoader() {

    const loader = document.getElementById("loader");

    const bar = document.querySelector(".loader-progress-bar");

    const status = document.querySelector(".loader-status");

    if (!loader) return;

    if (typeof gsap === "undefined") return;

    const tl = gsap.timeline();

    tl.to(bar, {

        width: "30%",

        duration: .8

    })

        .call(() => {

            status.textContent = "Drawing Blueprint...";

        })

        .to(bar, {

            width: "65%",

            duration: .8

        })

        .call(() => {

            status.textContent = "Constructing Structure...";

        })

        .to(bar, {

            width: "100%",

            duration: .8

        })

        .call(() => {

            status.textContent = "Ready";

        })

        .to(loader, {

            delay: .3,

            yPercent: -100,

            duration: 1.2,

            ease: "power4.inOut",

            onComplete() {

                loader.remove();

            }

        });

}
/*==========================================================
Page Loaded
==========================================================*/

window.addEventListener("load", () => {


    document.body.classList.add("loaded");

});


/*==========================================================
Console
==========================================================*/

console.log(

    "%cENTITY ENTERPRISES",

    "font-size:20px;font-weight:bold;color:#0D2346"

);

console.log(

    "%cArchitecture Experience Loaded",

    "color:#888"

);
function initHorizontalProjects() {

    const slider = document.querySelector(".projects-slider");

    if (!slider) return;

    let isDown = false;

    let startX;

    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {

        isDown = true;

        startX = e.pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener("mouseleave", () => {

        isDown = false;

    });

    slider.addEventListener("mouseup", () => {

        isDown = false;

    });

    slider.addEventListener("mousemove", (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    });

}
/*==========================================================

Services Animation

==========================================================*/

function initServices() {

    const cards = document.querySelectorAll(".service-panel");

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach(c => c.classList.remove("active"));

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: .6

    });

    cards.forEach(card => observer.observe(card));

}
/*==========================================================

Timeline

==========================================================*/

function initTimeline() {

    const timeline = document.querySelector(".timeline");

    const progress = document.querySelector(".timeline-progress");

    const steps = document.querySelectorAll(".timeline-step");

    if (!timeline || !progress || !steps.length) return;

    // Initial check on load
    steps.forEach(step => {
        const r = step.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.8) {
            step.classList.add("active");
        }
    });

    window.addEventListener("scroll", () => {

        const rect = timeline.getBoundingClientRect();

        const total = timeline.offsetHeight;

        let percent = ((window.innerHeight - rect.top) / total) * 100;

        percent = Math.max(0, Math.min(percent, 100));

        progress.style.height = percent + "%";

        steps.forEach(step => {

            const r = step.getBoundingClientRect();

            if (r.top < window.innerHeight * 0.8) {

                step.classList.add("active");

            }

        });

    });

}

/*==========================================================

Back To Top

==========================================================*/

const topBtn = document.getElementById("backTop");

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}
/*==========================================================

Project Hover Preview

==========================================================*/

const preview = document.getElementById("image-preview");
const previewImage = document.getElementById("preview-image");

if (preview && previewImage) {

    document.querySelectorAll(".project-card").forEach(card => {

        const img = card.querySelector("img");

        card.addEventListener("mouseenter", () => {

            preview.classList.add("active");
            previewImage.src = img.src;

        });

        card.addEventListener("mouseleave", () => {

            preview.classList.remove("active");

        });

        card.addEventListener("mousemove", (e) => {

            preview.style.left = e.clientX + 40 + "px";
            preview.style.top = e.clientY + 40 + "px";

        });

    });

}

// Removed duplicate blocks
async function loadFooter() {

    const footer = document.getElementById("footer");

    if (!footer) return;

    try {

        const response = await fetch("components/footer.html");

        footer.innerHTML = await response.text();

    }

    catch (error) {

        console.error(error);

    }

}
