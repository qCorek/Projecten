<?php

$servername = "localhost";
$username = "root";  
$password = "";      // Pas dit aan als nodig
$dbname = "reviewlijst";

$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer de verbinding
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}

// Gegevens uit het formulier ophalen en valideren
$naam = htmlspecialchars($_POST['naam']);
$bericht = htmlspecialchars($_POST['bericht']);
$cijfer = (int) $_POST['cijfer'];

if ($cijfer < 1 || $cijfer > 10) {
    die("Ongeldig cijfer! Het moet tussen 1 en 10 zijn.");
}

// Gegevens invoegen in de database
$sql = "INSERT INTO klant (naam, bericht, cijfer) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $naam, $bericht, $cijfer);

if ($stmt->execute()) {
    echo "Review succesvol toegevoegd!";
} else {
    echo "Fout bij het toevoegen van de review: " . $conn->error;
}

// Sluit de verbinding
$stmt->close();
$conn->close();
?>
