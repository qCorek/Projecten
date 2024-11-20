document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("animation-overlay");
    const overlayText = document.getElementById("overlay-text");

    if (overlay && overlayText) {
        const text = "Techniek College Rotterdam";

        
        text.split("").forEach((letter, index) => {
            const span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = letter === " " ? "\u00A0" : letter; 
            span.style.animationDelay = `${index * 0.1}s`; 
            overlayText.appendChild(span);
        });

        setTimeout(() => {
           
            overlay.style.display = "none";

            
            document.querySelector("header").style.opacity = "1";
            document.querySelector("nav").style.opacity = "1";
            document.querySelector("main").style.opacity = "1";

           
            document.body.style.overflow = "auto";
        }, 3000); 
    } else {
        
        document.querySelector("header").style.opacity = "1";
        document.querySelector("nav").style.opacity = "1";
        document.querySelector("main").style.opacity = "1";
        document.body.style.overflow = "auto";
    }


    document.getElementById("home-button").addEventListener("click", () => {
        window.location.href = "index.html"; 
    });

    document.getElementById("bank-button").addEventListener("click", () => {
        window.location.href = "bankoverschrijvingen.html"; 
    });

    document.getElementById("rekening-button").addEventListener("click", () => {
        window.location.href = "rekeningen.html"; 
    });
});
