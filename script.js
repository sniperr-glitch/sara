/* =====================================
   FOREVER US ❤️
   Premium Romantic Website
   PART 1
===================================== */

// ======================
// EDIT THIS DATE
// ======================

const relationshipStart = new Date("2026-01-01 00:00:00");

// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 3000);

});

// ======================
// MUSIC
// ======================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.volume = 0.25;
        music.play();

        musicBtn.innerHTML = "⏸️";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});

// ======================
// COUNTDOWN
// ======================

function updateCounter(){

    const now = new Date();

    const diff = now - relationshipStart;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(diff / (1000*60*60)) % 24;

    const minutes = Math.floor(diff / (1000*60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

// ======================
// TYPEWRITER
// ======================

const message = `

My love,

No matter how many miles separate us,
you've become the most beautiful part
of my everyday life.

Every message,
every laugh,
every call,
every moment with you
makes my world brighter.

Distance is only temporary.

One day,
I'll finally be able to hold your hand,
look into your eyes,
and remind you in person
how much I love you.

Until then...

I'll keep choosing you.

Every single day.

❤️

`;

const typeTarget = document.getElementById("typewriter");

let i = 0;

function typeWriter(){

    if(i < message.length){

        typeTarget.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

setTimeout(typeWriter,1500);

// ======================
// SECRET HEART
// ======================

const secretHeart = document.getElementById("secretHeart");

const popup = document.getElementById("secretPopup");

const closeBtn = document.getElementById("closeSecret");

secretHeart.addEventListener("click",()=>{

    popup.classList.add("show");

});

closeBtn.addEventListener("click",()=>{

    popup.classList.remove("show");

});

// ======================
// FLIP CARDS
// ======================

document.querySelectorAll(".flip-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("active");

    });

});/* =====================================
   FOREVER US ❤️
   SCRIPT.JS PART 2
===================================== */

/* ==========================
   FLOATING HEARTS
========================== */

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    heart.style.fontSize=(12+Math.random()*30)+"px";

    heart.style.opacity=Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);

/* ==========================
   HERO BUTTON
========================== */

const heroBtn=document.querySelector(".heroBtn");

heroBtn.addEventListener("click",()=>{

    document.querySelector("#about").scrollIntoView({

        behavior:"smooth"

    });

});

/* ==========================
   GALLERY LIGHTBOX
========================== */

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

images.forEach(img=>{

    img.onclick=()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

    }

});

lightbox.onclick=()=>{

    lightbox.classList.remove("show");

};

/* ==========================
   SCROLL REVEAL
========================== */

const reveals=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

reveals.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/* ==========================
   CURSOR GLOW
========================== */

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ==========================
   SPARKLES
========================== */

function sparkle(){

const s=document.createElement("span");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},3000);

}

setInterval(sparkle,200);

/* ==========================
   RANDOM LOVE QUOTES
========================== */

const quotes=[

"You're my favorite notification ❤️",

"I'd choose you in every lifetime.",

"My heart smiles because of you.",

"You are my safest place.",

"Forever starts with you.",

"You make ordinary days magical.",

"Distance only makes my love stronger.",

"I still smile reading your texts."

];

const quote=document.createElement("div");

quote.id="floatingQuote";

document.body.appendChild(quote);

function randomQuote(){

quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

quote.classList.add("show");

setTimeout(()=>{

quote.classList.remove("show");

},6000);

}

randomQuote();

setInterval(randomQuote,12000);

/* ==========================
   PARALLAX HEART
========================== */

window.addEventListener("scroll",()=>{

const heart=document.querySelector(".heroHeart");

heart.style.transform="translateY("+(window.scrollY*0.2)+"px) scale(1)";

});

/* ==========================
   BUTTON RIPPLE
========================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});

/* ==========================
   LOVE MESSAGE LOOP
========================== */

const letterMessages=[

"I miss you ❤️",

"You are beautiful.",

"I love every little thing about you.",

"One day... no more distance.",

"I'll always choose you."

];

let current=0;

setInterval(()=>{

document.title=letterMessages[current];

current++;

if(current>=letterMessages.length){

current=0;

}

},4000);

console.log("Forever Us ❤️ Loaded Successfully");