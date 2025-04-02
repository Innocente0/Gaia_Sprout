document.addEventListener("DOMContentLoaded", function() {
  // Add a click event listener to the "My Appointments" dashboard tab
  var dashboardTabs = document.querySelectorAll(".dashboard-tab");
  dashboardTabs.forEach(function(tab) {
    if (tab.textContent.trim() === "My Appointments") {
      tab.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "patient_schedule.html";   // this is the patient appointments page
      });
    }
  });

  // No functionality is added for the "Book Appointment" buttons
});
