/*
  Simple JavaScript file.

  We are using JavaScript for:
  1. Showing the current year in the footer
  2. Showing a message when the contact form is submitted
*/

// Select the year span from the footer
const yearElement = document.getElementById("year");

// Get the current year from the computer/browser
const currentYear = new Date().getFullYear();

// Put the current year inside the footer
yearElement.textContent = currentYear;

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Run this function when the form is submitted
contactForm.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Get the user's name from the input field
  const name = document.getElementById("name").value;

  // Show a simple message
  alert("Thank you, " + name + "! Your message has been received.");

  // Clear all form fields
  contactForm.reset();
});