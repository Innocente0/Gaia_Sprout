// login.js

document.addEventListener("DOMContentLoaded", function() {
    // Select the login form
    const loginForm = document.querySelector("form");
  
    // Listen for the form submission (login button click)
    loginForm.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Retrieve values from the form inputs
      const role = document.getElementById("login-role").value;
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
  
      // Prepare the data in URL-encoded format
      const formData = new URLSearchParams();
      formData.append("role", role);
      formData.append("username", username);
      formData.append("password", password);
  
      try {
        // Send POST request to the backend (login_process.php)
        const response = await fetch("login_process.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData.toString()
        });
  
        if (response.ok) {
          // Parse the JSON response from the server
          const result = await response.json();
  
          // Check if the login was successful
          if (result.success) {
            // Redirect to the homepage if login is successful
            window.location.href = "index.html";
          } else {
            // Show error message if login fails
            alert(result.message || "Invalid login credentials. Please try again.");
          }
        } else {
          // Handle non-200 HTTP responses
          alert("Server error. Please try again later.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      }
    });
  
    // Intercept the "Create an Account" link click event
    const createAccountLink = document.querySelector(".switch-button");
    if (createAccountLink) {
      createAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Redirect to the registration page
        window.location.href = "register.html";
      });
    }
  });
  