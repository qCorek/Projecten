<?php
// database.php - Verbindingsbestand met de database
$host = 'localhost';
$dbname = 'gastenboek';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database verbinding mislukt: " . $e->getMessage());
}

// register.php - Registratiepagina
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, 0)");
    $stmt->execute([$username, $email, $password]);

    echo "Registratie succesvol!";
}
?>

<form method="POST">
    <input type="text" name="username" placeholder="Gebruikersnaam" required>
    <input type="email" name="email" placeholder="E-mailadres" required>
    <input type="password" name="password" placeholder="Wachtwoord" required>
    <button type="submit">Registreren</button>
</form>

<?php
// login.php - Inlogpagina
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['is_admin'] = $user['is_admin'];
        header("Location: index.php");
    } else {
        echo "Ongeldige inloggegevens.";
    }
}
?>

<form method="POST">
    <input type="text" name="username" placeholder="Gebruikersnaam" required>
    <input type="password" name="password" placeholder="Wachtwoord" required>
    <button type="submit">Inloggen</button>
</form>

<?php
// index.php - Berichtenoverzicht en toevoegen
if (!isset($_SESSION['user_id'])) {
    die("Je moet ingelogd zijn om berichten te kunnen plaatsen.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    $stmt = $pdo->prepare("INSERT INTO messages (user_id, message, created_at) VALUES (?, ?, NOW())");
    $stmt->execute([$_SESSION['user_id'], $message]);
    echo "Bericht geplaatst!";
}
?>

<form method="POST">
    <textarea name="message" required></textarea>
    <button type="submit">Plaatsen</button>
</form>

<?php
// Weergave van berichten
$stmt = $pdo->query("SELECT messages.id, messages.message, users.username FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC");
while ($row = $stmt->fetch()) {
    echo "<p><strong>{$row['username']}:</strong> {$row['message']}</p>";
}
?>
