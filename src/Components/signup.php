
<?php 
    include 'db_connection.php';
    
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password for security

    // Validate the data (you can add more validation checks)
    if (empty($username) || empty($email) || empty($_POST["password"])) {
        die("Please fill in all fields.");
    }

    // Check if the email is already registered (you should implement proper email uniqueness check)
    $sql = "SELECT id FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        die("Email is already registered.");
    }

    // Insert user data into the database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
