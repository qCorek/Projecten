<?php
// Vraag om het spaargeld in te voeren
$spaargeld = (float)readline("Hoeveel geld heb je? ");

// Bedrag van de telefoon
$telefoon_prijs = 1000;

// Bepalen of je de telefoon kunt kopen
$tekort = $telefoon_prijs - $spaargeld;

if ($tekort > 250) {
    echo "Je komt $tekort euro te kort. Misschien moet je beter een baantje zoeken.\n";
} elseif ($tekort <= 250 && $tekort > 0) {
    echo "Je komt $tekort euro te kort. Je bent bijna daar!\n";
} else {
    $over = abs($tekort);
    echo "Je hebt genoeg spaargeld! Je hebt $over euro over voor een hoesje.\n";
}
?>
