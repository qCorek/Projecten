<?php
// Vraag om een getal in te voeren
$getal = (int)readline("Voer een getal in: ");

// Bepaal of het getal even of oneven is
if ($getal % 2 == 0) {
    echo "$getal is een even getal.\n";
} else {
    echo "$getal is een oneven getal.\n";
}
?>
