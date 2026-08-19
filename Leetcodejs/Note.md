LeetCode 30 Days of JavaScript
Week 1 — Closures, Functions & Shared State
Status: ✅ Completed
Problems Solved: 4 / 4

Overview
Week 1 focuses on fundamental JavaScript concepts related to functions, lexical scope, closures, object methods, shared state, strict equality, and error handling.
Topics Covered

First-Class Functions
Higher-Order Functions
Lexical Scope
Closures
Object Methods
Shared State
Private State
Strict Equality
Error Handling
Pre-Increment and Post-Increment


1. Create Hello World Function
Core Concept: First-Class Functions
JavaScript treats functions as first-class citizens. This means functions can be treated like any other value.
Functions can be:

Assigned to variables
Passed as arguments
Returned from other functions
Stored as object properties
Stored inside arrays

Solution
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

const fn = createHelloWorld();

fn(); // "Hello World"

Execution Flow
createHelloWorld()
        ↓
Returns a function
        ↓
fn stores the returned function
        ↓
fn()
        ↓
"Hello World"

Key Takeaway
The outer function returns another function. The returned function produces "Hello World" when it is invoked.
Interview Question
What are first-class functions?
Answer:
Functions are first-class citizens in JavaScript because they can be assigned to variables, passed as arguments, returned from other functions, and stored as values.

2. Counter
Core Concept: Closure
A closure is created when an inner function retains access to variables from its outer lexical scope, even after the outer function has finished executing.
Solution
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10);

counter(); // 10
counter(); // 11
counter(); // 12

Execution Flow
createCounter(10)
        ↓
n = 10
        ↓
Returns inner function
        ↓
Inner function forms a closure
        ↓
Closure remembers n
        ↓
counter() → 10
counter() → 11
counter() → 12

Why Does n Remember Its Value?
The returned function references n. Because of the closure, the function retains access to the lexical environment containing n.
Therefore, the value of n persists between function calls.
n++ vs ++n
Post-Increment — n++
Returns the current value first, then increments it.
let n = 10;

console.log(n++); // 10
console.log(n);   // 11

Pre-Increment — ++n
Increments the value first, then returns the new value.
let n = 10;

console.log(++n); // 11

Interview Question
What is a closure?
Answer:
A closure is a function that retains access to variables from its outer lexical scope even after the outer function has finished executing.

3. To Be Or Not To Be
Core Concepts

Returning objects
Object methods
Strict equality
Error handling
Closures

Solution
var expect = function(val) {
    return {
        toBe(expected) {
            if (val === expected) {
                return true;
            }

            throw new Error("Not Equal");
        },

        notToBe(expected) {
            if (val !== expected) {
                return true;
            }

            throw new Error("Equal");
        }
    };
};

Usage
expect(5).toBe(5);
// true

expect(5).notToBe(10);
// true

How It Works
Calling:
expect(5);

returns an object containing two methods:
expect(5)
    ↓
Object
 ├── toBe()
 └── notToBe()

Therefore, we can call:
expect(5).toBe(5);

The toBe() method compares the stored value with the expected value.
Strict Equality — ===
The === operator performs strict equality comparison.
It checks both:

Value
Data type

Example:
5 === 5;     // true
5 === "5";   // false

Whereas:
5 == "5";    // true

The == operator may perform type coercion before comparison.
Error Handling
When the condition is not satisfied, the function throws an error:
throw new Error("Not Equal");

Interview Question
What is the difference between == and ===?
Answer:
== performs loose equality and may convert data types before comparison, while === performs strict equality and compares both value and data type without type coercion.

4. Counter II
Core Concepts

Closures
Shared state
Object methods
Private state
Pre-increment
Pre-decrement

Solution
var createCounter = function(init) {

    let current = init;

    return {
        increment() {
            return ++current;
        },

        decrement() {
            return --current;
        },

        reset() {
            current = init;
            return current;
        }
    };
};

Usage
const counter = createCounter(5);

counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
counter.reset();     // 5

Execution Flow
createCounter(5)
        ↓
current = 5
        ↓
Returns an object
        ↓
 ┌────────────────┐
 │ increment()    │
 │ decrement()    │
 │ reset()        │
 └────────────────┘
        ↓
All methods access
the same `current`

Shared State
The variable:
let current = init;

belongs to the lexical scope of createCounter().
All three methods can access and modify the same variable:
increment() → current + 1
decrement() → current - 1
reset()     → current = init

Because the methods retain access to current through closures, the state persists between function calls.
Private State
The current variable cannot be accessed directly from outside the function:
counter.current; // undefined

Instead, it can only be modified through the provided methods:
counter.increment();
counter.decrement();
counter.reset();

This demonstrates how closures can be used to maintain private state.

Week 1 — Concept Summary



Concept
Definition




First-Class Functions
Functions can be assigned, passed, returned, and stored as values.


Higher-Order Functions
Functions that accept or return other functions.


Lexical Scope
Variable accessibility is determined by where the code is defined.


Closure
A function retains access to variables from its outer lexical scope.


Object Methods
Functions defined as properties of an object.


Shared State
Multiple functions access and modify the same variable.


Private State
State accessible only through controlled functions or methods.


Strict Equality
=== compares both value and data type without coercion.


Error Handling
throw new Error() explicitly generates an error.


Post-Increment
n++ returns the current value before incrementing.


Pre-Increment
++n increments first and returns the new value.




Week 1 — Interview Revision
1. What are first-class functions?
Functions are first-class citizens in JavaScript because they can be assigned to variables, passed as arguments, returned from functions, and stored as values.
2. What is a higher-order function?
A higher-order function is a function that accepts another function as an argument, returns a function, or both.
3. What is lexical scope?
Lexical scope determines which variables are accessible based on where functions and blocks are defined in the source code.
4. What is a closure?
A closure is a function that retains access to variables from its outer lexical scope even after the outer function has finished executing.
5. Why does the Counter remember n?
Because the returned function forms a closure over n, allowing it to retain access to that variable between calls.
6. What is the difference between == and ===?
== performs loose equality and can perform type coercion, while === performs strict equality without type coercion.
7. How can closures create private state?
Variables defined inside an outer function can remain inaccessible directly from outside while still being accessible to returned inner functions.
8. What is shared state in Counter II?
increment(), decrement(), and reset() all access the same current variable through their closure, allowing them to maintain and modify shared state.

Week 1 — Final Learning Summary
Functions
    ↓
First-Class Functions
    ↓
Higher-Order Functions
    ↓
Lexical Scope
    ↓
Closures
    ↓
Persistent State
    ↓
Shared / Private State
    ↓
Practical JavaScript Patterns

Week 1 Outcome
Problems Completed: 4 / 4 ✅
Key Concepts Mastered

First-Class Functions → Higher-Order Functions → Lexical Scope → Closures → Object Methods → Shared State → Private State → Error Handling

These four problems establish a strong JavaScript foundation for more advanced concepts such as callbacks, promises, asynchronous JavaScript, event handling, functional programming, and React state management.

Next
Week 2 → Basic Array Transformations
The next phase will focus on practical JavaScript array methods and transformation patterns, followed by interview-oriented revision and coding practice.
