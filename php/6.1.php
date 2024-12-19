<?php
session_start();

if (!isset($_SESSION['visit_count'])) {
    $_SESSION['visit_count'] = 1;
} else {
    $_SESSION['visit_count']++;
}

echo "Je hebt deze pagina " . $_SESSION['visit_count'] . " keer bezocht tijdens deze sessie.";
?>
