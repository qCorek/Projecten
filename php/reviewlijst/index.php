<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Schrijven</title>
</head>
<body>
    <h2>Schrijf een review</h2>
    <form action="verwerk_review.php" method="post">
        <label for="naam">Naam:</label>
        <input type="text" id="naam" name="naam" required><br><br>

        <label for="bericht">Bericht:</label><br>
        <textarea id="bericht" name="bericht" rows="4" required></textarea><br><br>

        <label for="cijfer">Cijfer (1-10):</label>
        <input type="number" id="cijfer" name="cijfer" min="1" max="10" required><br><br>

        <button type="submit">Verzenden</button>
    </form>
</body>
</html>
