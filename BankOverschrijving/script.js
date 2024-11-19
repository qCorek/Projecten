document.addEventListener("DOMContentLoaded", () => {
    const overlayText = document.getElementById("overlay-text");
    const text = "Techniek College Rotterdam";


    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = letter === " " ? "\u00A0" : letter; 
        span.style.animationDelay = `${index * 0.1}s`; 
        overlayText.appendChild(span);
    });

  
    setTimeout(() => {
        
        const overlay = document.getElementById("animation-overlay");
        overlay.style.display = "none";

       
        document.querySelector("header").style.opacity = "1";
        document.querySelector("nav").style.opacity = "1";
        document.querySelector("main").style.opacity = "1";

   
        document.body.style.overflow = "auto";
    }, 3000); 
});