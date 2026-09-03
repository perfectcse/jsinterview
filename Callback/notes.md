# 📚 Module 6 — Chapter 1: Callbacks

## 1. What is a Callback?

A **callback function** is a function that is passed as an argument to another function. The receiving function decides **when to execute** that function.

### Basic Flow

```text
Function A
    ↓
receives Function B
    ↓
Function A decides when to execute B
```

### Real-Life Example

```text
You place an order
      ↓
Restaurant prepares food
      ↓
Food is ready
      ↓
You receive notification
```

The notification represents an action that happens after another process is completed. This is similar to the idea behind callbacks.

---

## 2. Basic Callback Example

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));
```

### Execution

```text
calculate(10, 20, add)
          ↓
add is passed as an argument
          ↓
add becomes the operation parameter
          ↓
operation(10, 20)
          ↓
add(10, 20)
          ↓
30
```

### Output

```text
30
```

### Interview Explanation

> The output is `30`. The `add` function is passed as an argument to `calculate`, so it becomes the `operation` parameter. Inside `calculate`, `operation(a, b)` executes the `add` function with `10` and `20`, which returns `30`. Therefore, `add` acts as the callback function.

---

# 3. `callback` vs `callback()`

This is one of the most important callback concepts.

### `callback`

```javascript
callback
```

Means:

> **Pass or refer to the function.**

### `callback()`

```javascript
callback();
```

Means:

> **Execute the function.**

### Remember

```text
callback
    ↓
Pass the function reference

callback()
    ↓
Execute the function
```

---

# 4. `done` vs `done()`

Consider this example:

```javascript
function done() {
    console.log("Done");
}

function greet(callback) {
    callback();
}

greet(done());
```

Here, `done()` is executed **immediately** before `greet()` receives its argument.

Since `done()` does not return anything, its return value is:

```javascript
undefined
```

So effectively, this happens:

```javascript
greet(undefined);
```

Then inside `greet()`:

```javascript
callback();
```

JavaScript tries to execute `undefined` as a function, resulting in:

```text
TypeError: callback is not a function
```

### Correct Version

```javascript
greet(done);
```

Here, `done` is passed as a function reference.

### Key Difference

```text
done
 ↓
Pass the function

done()
 ↓
Execute the function immediately
```

### Interview Answer

> `done` passes the function reference, while `done()` executes the function immediately and passes its return value. If `done()` returns `undefined`, the callback parameter receives `undefined`, so calling `callback()` causes a `TypeError`.

---

# 5. Synchronous Callback

A **synchronous callback** executes immediately as part of the current execution flow.

Example:

```javascript
function processUser(callback) {
    console.log("Processing Vishal");

    callback();

    console.log("User processed");
}

processUser(() => {
    console.log("Callback");
});

console.log("End");
```

### Execution Flow

```text
processUser()
     ↓
Processing Vishal
     ↓
callback()
     ↓
Callback
     ↓
User processed
     ↓
processUser() finishes
     ↓
End
```

### Important Point

The callback executes immediately inside `processUser()` before `processUser()` finishes.

JavaScript executes the statements sequentially, so the callback completes before the next statement continues.

### Definition

> A synchronous callback executes immediately during the current execution flow, before the next statements continue.

---

# 6. Asynchronous Callback

Now let's introduce **asynchronous callbacks**.

Consider:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 0);

console.log("End");
```

### Output

```text
Start
End
Callback
```

Even though the timer is set to `0` milliseconds, `setTimeout()` does **not** execute the callback immediately.

Instead, the callback is scheduled to execute later.

JavaScript first completes the current synchronous code:

```text
Start
End
```

Then the callback gets an opportunity to execute:

```text
Callback
```

### Execution Flow

```text
console.log("Start")
        ↓
setTimeout(callback, 0)
        ↓
Callback is scheduled
        ↓
console.log("End")
        ↓
Current synchronous code finishes
        ↓
Callback executes
```

The arrow function is simply the callback passed to `setTimeout()`.

### Definition

> An asynchronous callback is scheduled to execute later, after the current synchronous code has finished.

---

# 7. Synchronous vs Asynchronous Callback

| Synchronous Callback                   | Asynchronous Callback                   |
| -------------------------------------- | --------------------------------------- |
| Executes immediately                   | Executes later                          |
| Runs during the current execution flow | Runs after the current synchronous code |
| Directly called during execution       | Scheduled for later execution           |
| Example: `callback()`                  | Example: `setTimeout(callback, 0)`      |

### Interview Answer

> A synchronous callback executes immediately as part of the current execution flow, while an asynchronous callback is scheduled to execute later, after the current synchronous code finishes. For example, a callback directly called inside a function is synchronous, while a callback passed to `setTimeout()` is asynchronous.

---

# 8. Multiple `setTimeout()` Callbacks

Consider:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");
```

### Execution Flow

```text
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
```

### Output

```text
A
C
E
B
D
```

### Key Point

`setTimeout()` callbacks execute **later**.

The JavaScript engine first completes the synchronous code:

```text
A
C
E
```

Then the scheduled callbacks execute:

```text
B
D
```

---

# 9. Callback vs Normal Function

Consider:

```javascript
function add(a, b) {
    return a + b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

calculate(10, 20, add);
```

Here:

```text
add
 ↓
Normal function by how it is defined
 ↓
Passed to calculate()
 ↓
Acts as a callback
```

### Important Concept

A callback is **not a separate type of function**.

Any function can become a callback when we pass it as an argument to another function, and that function executes it.

For example:

```javascript
function add(a, b) {
    return a + b;
}
```

`add` is a normal function.

But when we do:

```javascript
calculate(10, 20, add);
```

`add` acts as a callback.

### Interview Answer

> A callback is a role, not a special type of function. A function becomes a callback when it is passed as an argument to another function and is used by that function.

---

# 10. Named, Anonymous, and Arrow Callbacks

There are different ways to write a callback.

## 10.1 Named Callback

A named callback has its own function name.

```javascript
function done() {
    console.log("Done");
}

process(done);
```

Here:

```text
done
 ↓
Named function
 ↓
Passed to process()
 ↓
Acts as a callback
```

---

## 10.2 Anonymous Callback

An anonymous callback does not have a function name.

```javascript
process(function () {
    console.log("Done");
});
```

The function is created directly while being passed as an argument.

---

## 10.3 Arrow Callback

An arrow function can also be used as a callback.

```javascript
process(() => {
    console.log("Done");
});
```

Here, the arrow function acts as the callback.

### Important Interview Point

> An arrow function is not automatically a callback. It becomes a callback when it is passed as an argument to another function that uses it as a callback.

---

# 11. What Happens If We Forget `callback()`?

Consider:

```javascript
function processUser(callback) {
    console.log("Processing user");

    callback;

    console.log("Finished");
}
```

This:

```javascript
callback;
```

only refers to the function.

It does **not** execute the function.

Therefore, the callback code will not run.

To execute it:

```javascript
callback();
```

### Remember

```text
callback
    ↓
Function reference

callback()
    ↓
Function execution
```

---

# 12. Callback Learning Roadmap

Callbacks are the foundation for understanding asynchronous JavaScript.

```text
Synchronous Callbacks
        ↓
Asynchronous Callbacks
        ↓
setTimeout()
        ↓
Event Loop
        ↓
Promises
        ↓
async / await
```

Understanding callbacks properly makes the later concepts much easier.

---

# 🎤 Interview Questions & Answers

## Q1. What is a callback function?

> A callback function is a function passed as an argument to another function, which can then execute it at an appropriate time.

---

## Q2. What is the difference between `callback` and `callback()`?

> `callback` refers to the function and passes its reference, whereas `callback()` invokes or executes the function.

---

## Q3. Is a callback a special type of function?

> No. A callback is a role, not a special type of function. Any function can act as a callback when it is passed as an argument to another function.

---

## Q4. Can an arrow function be a callback?

> Yes. An arrow function can act as a callback when it is passed as an argument to another function. However, not every arrow function is a callback.

---

## Q5. What is a synchronous callback?

> A synchronous callback executes immediately during the current execution flow.

---

## Q6. What is an asynchronous callback?

> An asynchronous callback is scheduled to execute later, after the current synchronous code has finished.

---

## Q7. Why does `setTimeout(..., 0)` execute later?

> `setTimeout(..., 0)` schedules the callback to run later. It does not execute the callback immediately. JavaScript first completes the current synchronous execution.

---

## Q8. What is the difference between `done` and `done()`?

> `done` passes the function reference, while `done()` executes the function immediately and passes its return value.

---

## Q9. What happens if we forget to use `callback()`?

> The function is only referenced and is not executed, so the callback's code does not run.

---

# 🧠 Final Revision — Module 6, Chapter 1

Before starting **Chapter 2**, revise these key points:

* **Callback** → A function passed as an argument to another function.
* **`callback`** → Passes/references the function.
* **`callback()`** → Executes the function.
* A callback is a **role**, not a special type of function.
* Any function can act as a callback.
* A callback can be **synchronous or asynchronous**.
* **Synchronous callback** → Executes immediately during the current execution flow.
* **Asynchronous callback** → Executes later after the current synchronous code finishes.
* `setTimeout()` schedules its callback for later execution.
* `setTimeout(..., 0)` does **not** mean immediate execution.
* Arrow functions can be callbacks, but they are **not always callbacks**.
* Forgetting `callback()` means the callback code does not execute.
* `done` and `done()` have completely different meanings.
* `done` → Pass the function.
* `done()` → Execute the function.
* If `done()` returns `undefined`, passing it as a callback can cause `TypeError: callback is not a function`.

---

# ⭐ One-Line Interview Summary

> **A callback is a function passed to another function, where the receiving function controls when that function is executed; the callback may execute synchronously or asynchronously depending on how it is invoked.**

---

## ✅ Chapter 1 Status

**Module:** 6 — JavaScript
**Chapter:** 1 — Callbacks
**Status:** ✅ Completed

### Next Chapter

**Chapter 2 — Event Loop & Asynchronous JavaScript**

Topics will connect:

```text
Call Stack
   ↓
Web APIs
   ↓
Callback Queue
   ↓
Event Loop
   ↓
setTimeout()
   ↓
Promises
   ↓
Microtask Queue
   ↓
async / await
```
