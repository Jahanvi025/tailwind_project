
function androidclass(){
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  if ((email) || password.length >= 3) {
    // Navigate to the Android page
    window.location.href = './android_large-6.html';
  } else {
    // Display an error message
    alert('Please enter a valid email and password.');
  }
});
}
function Confirmation() {
    // Get all checkbox elements
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    // Initialize a flag to track if any checkbox is checked
    let isChecked = false;
  
    // Loop through all checkboxes
    checkboxes.forEach((checkbox) => {
      // If a checkbox is checked, set the flag to true
      if (checkbox.checked) {
        isChecked = true;
        return; // Exit the loop since we found a checked checkbox
      }
    });
  
    // If at least one checkbox is checked, render to androidpage7
    if (isChecked) {
      window.location.href = './android_large-8.html';
    } else {
      // Display an error message if no checkbox is checked
      alert('Please select at least one goal.');
    }
  }
  function lastcall(){
    window.location.href = './android_large-6.html';
  }