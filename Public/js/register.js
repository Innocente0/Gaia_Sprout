document.addEventListener("DOMContentLoaded", function() {
  // Function to validate the registration form fields
  function validateForm() {
    var role = document.getElementById("register-role").value;
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var username = document.getElementById("reg-username").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var password = document.getElementById("reg-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check that all fields are filled
    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return false;
    }

    // Check that password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    // All validations passed
    return true;
  }

  // When the Create Account button is clicked
  var createAccountBtn = document.getElementById("create-account-btn");
  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", function(e) {
      e.preventDefault();
      // Validate form fields before proceeding
      if (validateForm()) {
        // If valid, redirect to login page
        window.location.href = "login.html";
      }
    });
  }

  // When the Login switch button is clicked
  var loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
