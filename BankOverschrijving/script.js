
          function openPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        function addRekening(event) {
            event.preventDefault();
            const naam = document.getElementById('rekeningNaam').value;
            const saldo = parseFloat(document.getElementById('rekeningSaldo').value).toFixed(2);

            const rekeningList = document.querySelector('.rekening-list');
            const newRekening = document.createElement('div');
            newRekening.classList.add('rekening-item');
            newRekening.innerHTML = `<span>${naam}</span><span>€${saldo}</span>`;
            rekeningList.appendChild(newRekening);

            closePopup();
        }


document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        window.location.href = "Login.html";
        return; 
    }

    // Show logout button if logged in
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.style.display = 'block';
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn'); 
            window.location.href = "login.html";  
        });
    }

  
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
