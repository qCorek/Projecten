<?php
// Verkrijg de huidige tijd
$huidig_uur = (int)date("H");

// Vraag om temperatuur en luchtvochtigheid
$temperatuur = (float)readline("Voer de temperatuur in (in graden Celsius): ");
$luchtvochtigheid = (float)readline("Voer de luchtvochtigheid in (%): ");

// Controleer of de airco uit moet
if ($huidig_uur >= 17 || ($temperatuur < 20 && $luchtvochtigheid < 85)) {
    echo "De airco is uit.\n";
} else {
    echo "De airco is aan.\n";
}
?>
