document.addEventListener("DOMContentLoaded", function() {
    // Select all dashboard tabs
    var dashboardTabs = document.querySelectorAll(".dashboard-tab");
    dashboardTabs.forEach(function(tab) {
      // Check if the tab's text content is exactly "Book Appointment"
      if (tab.textContent.trim() === "Book Appointment") {
        console.log("Book Appointment tab found.");
        tab.addEventListener("click", function(e) {
          e.preventDefault();
          console.log("Redirecting to appointmnet.html");
          window.location.href = "patient_booking.html";  //this is the file that is not working
        });
      }
    });
  });
  