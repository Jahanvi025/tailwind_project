// Get the form and submit button elements
const form = document.getElementById("signupForm");
const submitButton = document.getElementById("submitButton");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function(event) {
  // Prevent the form from submitting in the default way
  event.preventDefault();

  // Get the form field elements
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Check if all form fields are filled
  if (fname.value && lname.value && email.value && password.value) {
    // Navigate to the Android page
    window.location.href = "./android_large-6.html";
  } else {
    // Display an error message if not all fields are filled
    const message = document.getElementById("signupMessage");
    message.textContent = "* Please fill in all fields before submitting *";
    message.style.textAlign = "center";
    message.style.marginLeft = "-60px";
    

    message.style.color = "red";

  }
});