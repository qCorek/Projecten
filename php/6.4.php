<?php
function calculateCircle($radius) {
    $pi = 3.14;
    $circumference = 2 * $pi * $radius;
    $area = $pi * pow($radius, 2);

    return [
        'circumference' => $circumference,
        'area' => $area
    ];
}

$radius = 5; // Je kunt de straal aanpassen
$circle = calculateCircle($radius);

echo "Voor een cirkel met straal $radius:<br>";
echo "Omtrek: " . $circle['circumference'] . "<br>";
echo "Oppervlakte: " . $circle['area'];
?>
