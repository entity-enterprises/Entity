/*==========================================================

PAGE TRANSITIONS

==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

document.body.classList.add("page-loaded");

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(!href) return;

if(href.startsWith("#")) return;

if(href.startsWith("mailto")) return;

if(href.startsWith("tel")) return;

// Don't intercept same-page hash links
try {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const targetUrl = new URL(href, window.location.href);
    const targetPath = targetUrl.pathname.split('/').pop() || 'index.html';
    if (targetPath === currentPath && targetUrl.hash) {
        return;
    }
} catch (err) {}

link.addEventListener("click",(e)=>{

e.preventDefault();

document.body.classList.add("page-exit");

setTimeout(()=>{

window.location=href;

},350);

});

});

});
