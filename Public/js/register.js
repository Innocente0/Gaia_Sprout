// register.js

document.addEventListener("DOMContentLoaded", function() {
  // Select the registration form
  const registerForm = document.querySelector("form");

  // Listen for the registration form submission (Create Account button click)
  registerForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve values from the form inputs
    const role = document.getElementById("register-role").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Basic client-side validation: ensure password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Prepare form data in URL-encoded format
    const formData = new URLSearchParams();
    formData.append("role", role);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirmPassword);

    try {
      // Updated fetch URL to match the location of register_process.php in the backend folder
      const response = await fetch("backend/register_process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });

      if (response.ok) {
        // Parse the JSON response from the server
        const result = await response.json();

        // Check if registration was successful
        if (result.success) {
          // Redirect to the login page if registration is successful
          window.location.href = "login.html";
        } else {
          // Display an error message if registration fails
          alert(result.message || "Registration failed. Please try again.");
        }
      } else {
        // Handle non-200 HTTP responses
        alert("Server error. Please try again later.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  });

  // Attach event listener for the "Login" switch button
  const loginButton = document.querySelector(".switch-button");
  if (loginButton) {
    loginButton.addEventListener("click", function(event) {
      event.preventDefault();
      // Redirect to the login page
      window.location.href = "login.html";
    });
  }
});
