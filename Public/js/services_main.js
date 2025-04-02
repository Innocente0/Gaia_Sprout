document.addEventListener('DOMContentLoaded', function() {
    // Select all service items (including those with 'reverse' class)
    const serviceItems = document.querySelectorAll('.service-item');
  
    // Map each service's index to a target page URL
    // Adjust these URLs as needed when you create the pages later.
    const servicePages = [
      'patient_booking.html',       // Service 1: Book Your Doctor Appointment
      'patient_booking.html',     // Service 2: Mental Health Appointment 
      'meal_plan.html',          // Service 3: Meal Planning & Weight Management
      'home_nursing.html',      // Service 4: Home-Based Nursing
      'chat_ai.html',           // Service 5: Chatting with AI
      'ai_wearables.html'       // Service 6: AI Predictive Analytics for Wearables Devices
    ];
  
    serviceItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        // Get the target page based on the index mapping.
        const targetURL = servicePages[index] || 'services.html';
        window.location.href = targetURL;
      });
    });
  });
  