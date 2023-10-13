





<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['logout'])) {
    // Clear any session or login status
    session_start();
    session_destroy();
    echo "Logged out successfully.";
}
?>




