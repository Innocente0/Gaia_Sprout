document.addEventListener('DOMContentLoaded', function() {
  // Select all recipe items
  const items = document.querySelectorAll('.content-item');
  
  // On mouse enter, add the active class for animation
  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    // On mouse leave, remove the active class
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
});
