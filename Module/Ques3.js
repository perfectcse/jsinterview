// 🎤 Question 3 — Callback Return Value
function calculate(a, b, callback) {
    return callback(a, b);
}

function multiply(x, y) {
    return x * y;
}

const result = calculate(5, 4, multiply);

console.log(result);

// "The output is 20. The multiply function is passed as a callback to calculate.
//  calculate executes the callback with 5 and 4, 
// and because multiply returns 20, return callback(a, b) 
// returns that value from calculate. Therefore, result receives 20."