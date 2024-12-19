<?php
function generateRandomPostalCode() {
    $numbers = mt_rand(1000, 9999);
    $letters = chr(mt_rand(65, 90)) . chr(mt_rand(65, 90)); // Twee hoofdletters
    return $numbers . " " . $letters;
}

echo "Willekeurige postcode: " . generateRandomPostalCode();
?>
