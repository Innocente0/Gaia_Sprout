document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all items
        items.forEach(i => i.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');
      });
    });
  });
  