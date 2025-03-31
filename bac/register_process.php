<?php
// Make sure there is no whitespace before <?php

header("Content-Type: application/json");

// Process only POST requests
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Retrieve and sanitize POST data
    $role             = isset($_POST["role"]) ? trim($_POST["role"]) : "";
    $first_name       = isset($_POST["first_name"]) ? trim($_POST["first_name"]) : "";
    $last_name        = isset($_POST["last_name"]) ? trim($_POST["last_name"]) : "";
    $username         = isset($_POST["username"]) ? trim($_POST["username"]) : "";
    $email            = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $password         = isset($_POST["password"]) ? $_POST["password"] : "";
    $confirm_password = isset($_POST["confirm_password"]) ? $_POST["confirm_password"] : "";

    // Validate that all fields are filled
    if (empty($role) || empty($first_name) || empty($last_name) || empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        echo json_encode([
            "success" => false,
            "message" => "All fields are required."
        ]);
        exit;
    }

    // Validate that the passwords match
    if ($password !== $confirm_password) {
        echo json_encode([
            "success" => false,
            "message" => "Passwords do not match."
        ]);
        exit;
    }

    // --- Insert your database integration here ---
    // For example:
    // 1. Connect to the database.
    // 2. Check if the username or email already exists.
    // 3. Hash the password with password_hash().
    // 4. Insert the new user.
    // 5. Return appropriate success or error messages.

    // For demonstration, we simulate a successful registration.
    echo json_encode([
        "success" => true,
        "message" => "Registration successful."
    ]);
    exit;
} else {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);
    exit;
}
