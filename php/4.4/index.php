<?php

$productprijzen = [
    "Laptop" => 1200,
    "Koptelefoon" => 45,
    "Monitor" => 150,
    "Muis" => 50,
    "Toetsenbord" => 200,
    "USB-stick" => 30,
];

foreach ($productprijzen as $product => $prijs) {
    if ($prijs > 150) {
        $productprijzen[$product] = $prijs * 1.19; 
    } elseif ($prijs < 55) {
        $productprijzen[$product] = $prijs * 1.11; 
    }
}

echo "Producten met aangepaste prijzen:\n";
foreach ($productprijzen as $product => $prijs) {
    echo "$product: €" . number_format($prijs, 2) . "\n";
}
?>
