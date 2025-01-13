// Stap 4: Haal elementen op
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const resultOutput = document.getElementById('resultOutput');

// Stap 5: Haal de knoppen op
const possibleChoices = document.querySelectorAll('button');

// Stap 6: Variabelen voor keuzes en resultaat
let player = '';
let computer = '';
let result = '';

// Event listener voor elke knop
possibleChoices.forEach(button => {
    button.addEventListener('click', (e) => {
        // Stap 7: Verkrijg de keuze van de speler
        player = e.target.id;
        playerChoice.innerHTML = player;
        
        // Stap 8: Genereer de keuze van de computer
        generateComputerChoice();
        
        // Stap 9: Bereken het resultaat
        getResult();
    });
});

// Stap 10: Functie om de keuze van de computer te genereren
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computer = 'rock';
    } else if (randomNumber === 2) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    computerChoice.innerHTML = computer;
}

// Stap 11: Functie om het resultaat te berekenen
function getResult() {
    if (computer === player) {
        result = "Gelijkspel!";
    } else if (computer === 'rock' && player === 'paper' || 
               computer === 'paper' && player === 'scissors' || 
               computer === 'scissors' && player === 'rock') {
        result = "Je hebt gewonnen!";
    } else {
        result = "Je hebt verloren!";
    }

    resultOutput.innerHTML = result;
}
