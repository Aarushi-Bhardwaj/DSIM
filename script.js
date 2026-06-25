
const counters = document.querySelectorAll(".count");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const sectionTop = counterSection.offsetTop - 300;

    if (window.scrollY > sectionTop && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            counter.innerText = "0";

            const updateCounter = () => {

                const target = +counter.getAttribute("data-target");

                const current = +counter.innerText;

                const increment = target / 100;

                if (current < target) {

                    counter.innerText = Math.ceil(current + increment);

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

});



// =====================
// Back To Top Button
// =====================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    topBtn.onclick = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}



// =====================
// Navbar Shadow On Scroll
// =====================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});



// =====================
// Loader
// =====================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});



// =====================
// Current Year In Footer
// =====================

const year = document.getElementById("year");

if (year) {

    year.innerHTML =
        "© " + new Date().getFullYear() + " DSIM. All Rights Reserved.";

}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(scrollY >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
window.addEventListener("scroll",()=>{

let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (winScroll/height)*100;

document.getElementById("progress-bar").style.width = scrolled + "%";

});
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

});
setTimeout(()=>{

document.getElementById("popup").style.display="flex";

},10000);


document.getElementById("close-popup").onclick=function(){

document.getElementById("popup").style.display="none";

}
document.addEventListener("keydown",function(e){

    if(e.key==="d"){

        document.body.classList.toggle("dark-mode");

    }

});
