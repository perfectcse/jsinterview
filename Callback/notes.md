Function A
    ↓
receives Function B
    ↓
Function A decides when to execute B

You place order
      ↓
Restaurant prepares food
      ↓
Food is ready
      ↓
You receive notification


//.2 Question 
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));


"The output is 30. The add function is passed as an argument to calculate, so it becomes the operation parameter. Inside calculate, operation(a, b) executes the add function with 10 and 20, which returns 30. Therefore, add is the callback function."

//3. "It throws a TypeError because done() is executed immediately when passed with parentheses. Since done() doesn't return anything, callback receives undefined. When callback() is then called inside greet, JavaScript throws TypeError: callback is not a function. We should pass done without parentheses."

callback → pass the function
callback() → execute the function


4. processUser()
     ↓
Processing Vishal
     ↓
callback()
     ↓
User processed
     ↓
processUser() finishes
     ↓
End

The output is Processing Vishal, User processed, and End. This is a synchronous callback because the callback is executed immediately inside processUser() before the function finishes. JavaScript executes the statements sequentially, so User processed is printed before End.

5. Now let's introduce asynchronous callbacks.

The output is Start, End, and Callback. Even though the timer is set to 0 milliseconds, setTimeout schedules the callback to execute later. JavaScript first completes the current synchronous code, so End is printed before the callback. The Arrow Function is simply the callback passed to setTimeout.


Synchronous Callback
        ↓
Asynchronous Callback
        ↓
setTimeout()
        ↓
Event Loop
        ↓
Promises
        ↓
Async/Await



🎤 Question 6 — Callback vs Normal Function

function add(a, b) {
    return a + b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

calculate(10, 20, add);

Here:

add → normal function by how it is defined.
add → callback function by how it is used.
calculate → receives and executes the callback.

A callback is not a separate type of function. Any function can become a callback when we pass it as an argument to another function, which then executes it. For example, add is a normal function, but when we pass add to calculate, it acts as a callback


What is the difference between a synchronous callback and an asynchronous callback? Give one example of each.
1. synchronous
The callback executes immediately during the current execution flow, before the next statements continue.

2. Asynchronous callback:

The callback is scheduled to execute later, after the current synchronous code has finished.

console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 0);

console.log("End");

A synchronous callback executes immediately as part of the current execution flow, while an asynchronous callback is scheduled to execute later, after the current synchronous code finishes. For example, a callback directly called inside a function is synchronous, while a callback passed to setTimeout() is asynchronous.


console.log("A")
      ↓
setTimeout(B) → scheduled
      ↓
console.log("C")
      ↓
setTimeout(D) → scheduled
      ↓
console.log("E")
      ↓
B callback executes
      ↓
D callback executes


setTimeout() callbacks execute later.