//🎤 Question 2 — Callback with Parameters

function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

function display(value) {
    console.log(value);
}

calculate(10, 20, display);

//"The output is 30. Inside calculate, 10 and 20 are added and stored in result. 
// Then callback(result) passes 30 to the display function, so display(30) executes and prints 30."