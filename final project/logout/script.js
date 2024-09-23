document.addEventListener("DOMContentLoaded", function() {
    const confirmLogoutBtn = document.getElementById('confirm-logout');
    const cancelLogoutBtn = document.getElementById('cancel-logout');
    const overlay = document.getElementById('overlay');
  
    // When the user confirms logout
    confirmLogoutBtn.addEventListener('click', function() {
      // Redirect to the login page or perform the logout action
      alert('You have logged out successfully.');
      // Redirect to login page (uncomment below line to use it)
      window.location.href = "../sign/sign.html";
    });
  
    // When the user cancels logout
    cancelLogoutBtn.addEventListener('click', function() {
      // Close the overlay or take the user back to the dashboard
      alert('Logout canceled.');
      // Redirect to another page or close the confirmation modal (if needed)
       window.location.href = "../index.html";
    });
  });
  