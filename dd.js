// script.js

// Display a message in the browser console
console.log("JavaScript is running!");

// Function called when button is clicked
function greet() {
    alert("Hello, World!");
}

// Change the heading text after the page loads
window.onload = function () {
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome to My JavaScript Page";
};