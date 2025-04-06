// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get all work__item elements (the clickable boxes)
  const workItems = document.querySelectorAll('.work__item');

  // Loop through each work__item to add click event listeners
  workItems.forEach(item => {
    item.addEventListener('click', function(event) {
      // Prevent default anchor behavior for opening the menu
      event.preventDefault();

      // Get the associated file menu (hidden by default)
      const fileMenu = item.querySelector('.file-menu');

      // Toggle the visibility of the file menu
      if (fileMenu.style.display === 'block') {
        fileMenu.style.display = 'none'; // Hide if it's already visible
      } else {
        // Hide all other open menus
        document.querySelectorAll('.file-menu').forEach(menu => {
          menu.style.display = 'none';
        });

        fileMenu.style.display = 'block'; // Show the selected menu
      }
    });
  });

  // Optional: Close the menu when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.work__item')) {
      // Close any open file menus when clicking outside
      document.querySelectorAll('.file-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });

  // Ensure that links open the PDFs in a new tab
  const fileLinks = document.querySelectorAll('.file-menu a');
  fileLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default behavior of downloading the file
      event.preventDefault();

      // Open the PDF in a new tab
      window.open(link.href, '_blank');
    });
  });
});
