document.addEventListener('DOMContentLoaded', function() {
    // Select all service boxes
    const serviceItems = document.querySelectorAll('.content-item');
  
    // Set up click events for each service item.
    // Here we use the index of the item to decide which page to navigate to.
    // You can modify the mapping below as needed.
    serviceItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        let targetURL = '';
        switch(index) {
          case 0:
            targetURL = 'patient_booking.html';  // Mental Health Support Appointment
            break;
          case 1:
            targetURL = 'emergency.html';      // Emergency Medical Response Integration
            break;
          case 2:
            targetURL = 'meal_plan.html';       // Meal Planning and Weight Management
            break;
          default:
            targetURL = 'services.html';       // Fallback page
            break;
        }
        window.location.href = targetURL;
      });
    });
  });
  