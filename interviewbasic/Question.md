🟢 SECTION 1: Core Fundamentals
1. What is JavaScript?
JavaScript is a single-threaded, interpreted language used to build interactive web applications.

2. Difference between var, let, const?
var → function scoped, hoisted as undefined
let → block scoped, TDZ
const → block scoped, cannot reassign

3. What is Hoisting?
JavaScript moves variable and function declarations to the top during memory creation phase.

4. What is TDZ?
Temporal Dead Zone is the time between entering scope and declaration of let/const.

5. Difference between == and ===?
== → value comparison
=== → value + type comparison

6. null vs undefined?
undefined → declared but not assigned
null → intentionally empty value

7. What is Scope?
Scope defines where variables are accessible.
Global
Function
Block

8. What is Variable Shadowing?
When a local variable hides a global variable with same name.

🔵 SECTION 2: Functions & Execution

9. What is Execution Context?
Environment where JS code runs.

Two phases:
Memory creation phase
Execution phase

10. What is Call Stack?
A LIFO structure that tracks function execution.

11. Difference between Function Declaration & Expression?
Declaration:
Fully hoisted
Callable before definition
Expression:
Not fully hoisted

12. What is a Callback?
A function passed as argument to another function.

13. What is Closure?
A function that remembers its outer scope variables even after outer function execution.

14. Why are variables private in closur
Because they exist in outer function scope and are not directly accessible.

🟣 SECTION 3: DOM & Events

15. What is DOM?
Document Object Model – structured representation of HTML.

16. How do you select elements?
getElementById
querySelector
querySelectorAll

17. What is Event Handling?
Responding to user actions using event listeners.

18. Difference between onclick and addEventListener?
addEventListener allows multiple handlers and is professional approach.

🔴 SECTION 4: this Keyword

19. What is this?
this refers to the object calling the function.

20. this in normal function?
In browser → window (non-strict mode)

21. this inside object method?
Refers to that object.

22. this in arrow function?
Arrow functions do NOT have their own this.
They inherit from surrounding scope.

🟡 SECTION 5: Asynchronous JavaScript

23. Why is JS single-threaded?
Because it has one call stack and executes one task at a time.

24. What is Event Loop?
Mechanism that handles async callbacks by checking if call stack is empty before executing queued tasks.

25. What is setTimeout?
Schedules a function to execute after delay, handled via Web APIs.

26. What is Callback Queue?
Queue where async callbacks wait before execution.

27. What is Promise?
An object representing eventual completion or failure of async operation.
States:
Pending
Fulfilled
Rejected

28. What is Async/Await?
Syntactic sugar over promises that makes async code look synchronous.

29. What is Microtask vs Macrotask?
Microtasks:
Promise callbacks
Faster execution
Macrotasks:
setTimeout
setInterval
Microtasks execute before macrotasks.

✅ Is JavaScript Concept Complete?
For frontend / React interviews (fresher to junior level) →
👉 YES, your core JS foundation is complete.
................
You have covered:
🟢 Fundamentals
Variables (var, let, const)
Data types
Operators
Functions
Scope
................
🔵 Intermediate
Hoisting
TDZ
Execution Context
Call Stack
Closures
Variable shadowing
..................
🟣 Advanced Basics
this keyword
Event loop
setTimeout
Async behavior
Promises (intro level)
DOM manipulation
That is a strong JavaScript base.