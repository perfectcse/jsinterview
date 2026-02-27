// Selecting elements
const normalBtn = document.getElementById("normalBtn");
const arrowBtn = document.getElementById("arrowBtn");
const asyncBtn = document.getElementById("asyncBtn");
const output = document.getElementById("output");


// 1️⃣ THIS KEYWORD DEMO

const user = {
    name: "Vishal",

    normalFunction: function() {
        // Here 'this' refers to user object
        output.innerText = "Normal Function this.name = " + this.name;
    },

    arrowFunction: () => {
        // Arrow function does NOT have its own this
        output.innerText = "Arrow Function this.name = " + this.name;
    }
};


// Event Listeners
normalBtn.addEventListener("click", function() {
    user.normalFunction();
});

arrowBtn.addEventListener("click", function() {
    user.arrowFunction();
});


// 2️⃣ ASYNC + EVENT LOOP DEMO

asyncBtn.addEventListener("click", function() {

    output.innerText = "Check Console for Async Order";

    console.log("Start");

    setTimeout(function() {
        console.log("Inside setTimeout");
    }, 0);

    console.log("End");
});