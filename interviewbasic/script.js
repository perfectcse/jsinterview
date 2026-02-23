// DOM Selection
const counterText = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const colorBtn = document.getElementById("colorBtn");
const container = document.querySelector(".container");

// Closure Counter Function
function createCounter() {
    let count = 0;  // Private variable (Closure)

    return {
        increase: function() {
            count++;
            updateUI();
        },
        decrease: function() {
            count--;
            updateUI();
        },
        reset: function() {
            count = 0;
            updateUI();
        }
    };

    function updateUI() {
        counterText.innerText = "Count: " + count;
    }
}

// Creating counter instance
const counter = createCounter();

// Event Listeners
increaseBtn.addEventListener("click", counter.increase);
decreaseBtn.addEventListener("click", counter.decrease);
resetBtn.addEventListener("click", counter.reset);

// Toggle Dark Mode
colorBtn.addEventListener("click", function() {
    container.classList.toggle("dark");
});