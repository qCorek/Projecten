<?php
session_start();

// Sessievariabele
if (!isset($_SESSION['visit_count'])) {
    $_SESSION['visit_count'] = 1;
} else {
    $_SESSION['visit_count']++;
}

// Cookie
if (!isset($_COOKIE['total_visit_count'])) {
    $total_visits = 1;
    setcookie('total_visit_count', $total_visits, time() + (365 * 24 * 60 * 60)); // 1 jaar geldig
} else {
    $total_visits = $_COOKIE['total_visit_count'] + 1;
    setcookie('total_visit_count', $total_visits, time() + (365 * 24 * 60 * 60));
}

echo "Je hebt deze pagina " . $_SESSION['visit_count'] . " keer bezocht in deze sessie.<br>";
echo "Je hebt deze pagina in totaal " . $total_visits . " keer bezocht.";
?>
