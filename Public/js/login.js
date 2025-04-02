document.addEventListener("DOMContentLoaded", function() {
  // Add click event listener to the Login button
  var loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }

  // Add click event listener to the Create an Account button
  var createAccountBtn = document.getElementById("create-account-btn");
  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "register.html";
    });
  }
});
