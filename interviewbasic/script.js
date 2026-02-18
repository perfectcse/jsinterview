// Selecting elements
const counterText = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const colorBtn = document.getElementById("colorBtn");
const title = document.getElementById("title");

// Global variable
let count = 0;

// Increase function
function increase() {
    count++;
    counterText.innerText = "Count: " + count;
}

// Decrease function
function decrease() {
    count--;
    counterText.innerText = "Count: " + count;
}

// Change color function
function changeColor() {
    title.classList.toggle("red");
}

// Event listeners
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
colorBtn.addEventListener("click", changeColor);
