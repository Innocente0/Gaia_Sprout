<?php
session_start();
header('Content-Type: application/json');

// Ensure that the request is a POST request.
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// Retrieve and sanitize input values.
$role     = isset($_POST['role']) ? trim($_POST['role']) : '';
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Validate inputs.
if (empty($role) || empty($username) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit;
}

// Database connection settings – update these with your actual DB details.
$host       = 'localhost';
$dbname     = 'your_database_name';
$dbusername = 'your_database_username';
$dbpassword = 'your_database_password';

try {
    // Create a new PDO instance.
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare a SQL statement to fetch the user with matching username and role.
    $stmt = $pdo->prepare("SELECT id, username, password, role FROM users WHERE username = :username AND role = :role LIMIT 1");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':role', $role);
    $stmt->execute();

    // Check if a user is found.
    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verify the provided password against the hashed password stored in the database.
        if (password_verify($password, $user['password'])) {
            // Credentials are correct – set session variables.
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];

            echo json_encode(["success" => true]);
            exit;
        } else {
            // Invalid password.
            echo json_encode(["success" => false, "message" => "Invalid username or password."]);
            exit;
        }
    } else {
        // No user found with that username/role.
        echo json_encode(["success" => false, "message" => "Invalid username or password."]);
        exit;
    }
} catch (PDOException $e) {
    // Handle any errors during the database operations.
    echo json_enacode(["success" => false, "message" => "Server error. Please try again later."]);
    exit;
}
?>
