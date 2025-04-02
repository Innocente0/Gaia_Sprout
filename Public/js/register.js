document.addEventListener("DOMContentLoaded", function() {
  // When either the Create Account or Login button is clicked, redirect to login.html

  // Create Account button
  var createAccountBtn = document.getElementById("create-account-btn");
  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }

  // Login switch button
  var loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
