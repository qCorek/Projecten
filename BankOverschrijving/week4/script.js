
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
    const saldo = parseInt(document.getElementById('rekeningSaldo').value); 

    const rekening = { naam, saldo };

 
    const rekeningen = JSON.parse(localStorage.getItem('rekeningen')) || [];
    rekeningen.push(rekening);
    localStorage.setItem('rekeningen', JSON.stringify(rekeningen));

    
    closePopup();

  
    updateRekeningList();
}


function updateRekeningList() {
    const rekeningList = document.querySelector('.rekening-list');
    rekeningList.innerHTML = '';  

   
    const rekeningen = JSON.parse(localStorage.getItem('rekeningen')) || [];

  
    if (rekeningen.length === 0) {
        rekeningList.innerHTML = '<p>No rekeningen available.</p>';
    }

   
    rekeningen.forEach(rekening => {
        const rekeningItem = document.createElement('div');
        rekeningItem.classList.add('rekening-item');
        rekeningItem.innerHTML = `<span>${rekening.naam}</span><span>€${rekening.saldo}</span>`;
        rekeningList.appendChild(rekeningItem);
    });
}

function overschrijven() {
 
    const vanRekening = document.getElementById('vanRekening').value;
    const naarRekening = document.getElementById('naarRekening').value;
    const bedrag = parseInt(document.getElementById('bedrag').value); 

    
    if (!vanRekening || !naarRekening || isNaN(bedrag) || bedrag <= 0) {
        alert('Vul alle velden correct in en zorg ervoor dat het bedrag positief is.');
        return;
    }

  
    const rekeningen = JSON.parse(localStorage.getItem('rekeningen')) || [];

   
    const vanAccount = rekeningen.find(rek => rek.naam === vanRekening);
    const naarAccount = rekeningen.find(rek => rek.naam === naarRekening);

  
    vanAccount.saldo = parseInt(vanAccount.saldo);
    naarAccount.saldo = parseInt(naarAccount.saldo);


    if (vanAccount.saldo < bedrag) {
        alert('Niet genoeg saldo op de rekening!');
        return;
    }

 
    vanAccount.saldo -= bedrag;
    naarAccount.saldo += bedrag;

  
    localStorage.setItem('rekeningen', JSON.stringify(rekeningen));

   
    alert(`Overmaking van €${bedrag} van ${vanRekening} naar ${naarRekening} was succesvol!`);

    
    window.location.reload();
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

    updateRekeningList();




        

});