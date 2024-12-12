<?php
// Vraag de leeftijd van de gebruiker
$leeftijd = (int)readline("Wat is je leeftijd? ");

// Controleer of de persoon een scooter rijbewijs mag halen
if ($leeftijd >= 16) {
    echo "Je mag een scooter rijbewijs halen.\n";
} else {
    echo "Je mag geen scooter rijbewijs halen.\n";
}

// Controleer of de persoon mag stemmen
if ($leeftijd >= 18) {
    // Vraag of de persoon een stempas heeft
    $heeft_stempas = readline("Heb je een stempas? (ja/nee): ");
    
    if (strtolower($heeft_stempas) == "ja") {
        echo "Je mag stemmen.\n";
    } else {
        echo "Je mag niet stemmen omdat je geen stempas hebt.\n";
    }
} else {
    echo "Je mag niet stemmen omdat je onder de 18 bent.\n";
}
?>
