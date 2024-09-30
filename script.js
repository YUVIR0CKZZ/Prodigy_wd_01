// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
  // Check if the page has been scrolled down by 50 pixels
  if (window.scrollY > 50) {
    // Add the 'scrolled' class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class from the navbar
    navbar.classList.remove('scrolled');
  }
});
