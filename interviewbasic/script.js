// Selecting elements from DOM
// querySelector selects first matching element
const button = document.querySelector(".btn");
const title = document.getElementById("title");

// Variable to track click count
let clickCount = 0;

// Function to handle button click
function handleClick() {

    // Increment click count
    clickCount++;

    // Change heading text dynamically (DOM manipulation)
    title.innerText = "Button Clicked " + clickCount + " times";

    // Log message in console
    console.log("Button was clicked");
}

// Adding event listener to button
// "click" is event type
// handleClick is callback function
button.addEventListener("click", handleClick);