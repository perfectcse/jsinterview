# Module 6 --- Chapter 3: Callbacks with Array Methods

**Status: COMPLETED**\
**Purpose:** Complete revision notes for JavaScript callback functions
used with array methods.

## 1. Callback fundamentals

A **callback** is a function passed as an argument to another function
so that the receiving function can invoke it.

JavaScript array methods use callbacks to perform actions, transform
values, test conditions, or accumulate results.

``` javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});

// Output:
// 1
// 2
// 3
```

## 2. Complete array methods comparison

  -----------------------------------------------------------------------
  Method                  Main purpose            Returns
  ----------------------- ----------------------- -----------------------
  `forEach()`             Perform an action for   `undefined`
                          every element           

  `map()`                 Transform every element New array

  `filter()`              Select elements         New array
                          matching a condition    

  `find()`                Find the first matching Single value or
                          element                 `undefined`

  `some()`                Check whether at least  `true` / `false`
                          one element matches     

  `every()`               Check whether all       `true` / `false`
                          elements match          

  `reduce()`              Build one final result  Any accumulated value
  -----------------------------------------------------------------------

## 3. Memory shortcuts

-   `forEach()` → **DO**
-   `map()` → **TRANSFORM**
-   `filter()` → **SELECT ALL**
-   `find()` → **FIND FIRST**
-   `some()` → **AT LEAST ONE?**
-   `every()` → **ALL?**
-   `reduce()` → **COMBINE**

## 4. Examples of each method

### `forEach()` --- perform an action for every element

``` javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});

// Logs 1, 2, 3.
// forEach() itself returns undefined.
```

Use `forEach()` when you want to perform an action for each element and
do not need a new array as the method's result.

### `map()` --- transform every element

``` javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6]
```

Use `map()` when you want a new array containing the result of
transforming each element.

### `filter()` --- select all matching elements

``` javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

Use `filter()` when you want all elements that satisfy a condition.

### `find()` --- find the first matching element

``` javascript
const numbers = [3, 6, 9, 12];
const firstOverEight = numbers.find((number) => number > 8);

console.log(firstOverEight); // 9
```

`find()` returns only the first matching element. If no element matches,
it returns `undefined`.

### `some()` --- check whether at least one element matches

``` javascript
const numbers = [1, 3, 4];

console.log(numbers.some((number) => number % 2 === 0)); // true
```

`some()` returns `true` if at least one element satisfies the condition.
Otherwise, it returns `false`.

### `every()` --- check whether all elements match

``` javascript
const numbers = [2, 4, 6];

console.log(numbers.every((number) => number % 2 === 0)); // true
```

`every()` returns `true` only if all elements satisfy the condition.
Otherwise, it returns `false`.

### `reduce()` --- combine elements into one accumulated result

``` javascript
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total); // 10
```

`reduce()` updates an accumulator as it processes the array. The final
accumulated value can be a number, string, object, array, or another
value. Providing an initial value, such as `0` for a sum, is often
clearer and avoids errors when the array is empty.

## 5. Callback arguments

Array method callbacks can receive up to three common arguments, in this
order:

1.  **Current element**
2.  **Current index**
3.  **Original array**

Example:

``` javascript
const fruits = ["apple", "banana"];

fruits.forEach((fruit, index, array) => {
  console.log(fruit, index, array);
});
```

Declare only the parameters you need.

## 6. Important distinctions and common mistakes

-   **`forEach()`** is mainly used for actions or side effects. It
    returns `undefined`; it does not return a transformed array.
-   **`map()`** returns a new array. Return a value from the callback to
    populate each output element.
-   **`filter()`** keeps every element whose callback result is truthy.
-   **`find()`** returns the first matching element, or `undefined` if
    no element matches.
-   **`some()`** returns `true` if at least one element passes the
    condition.
-   **`every()`** returns `true` only if all elements pass. For an empty
    array, `every()` returns `true`, while `some()` returns `false`.
-   **`reduce()`** combines values through an accumulator. An initial
    value is usually helpful, especially for empty arrays.
-   Do not confuse the callback function with the value returned by the
    array method.
-   A callback is not automatically asynchronous. These array methods
    normally invoke their callbacks synchronously.

## 7. How to choose the right method

  If you need to...                             Use
  --------------------------------------------- -------------
  Perform an action for each element            `forEach()`
  Transform every element into a new value      `map()`
  Select all elements matching a condition      `filter()`
  Get only the first matching element           `find()`
  Check whether at least one element matches    `some()`
  Check whether all elements match              `every()`
  Build a total or another accumulated result   `reduce()`

## 8. Interview-ready summary

The main differences between these array methods are their purpose and
return value:

-   `forEach()` performs an action and returns `undefined`.
-   `map()` transforms each element and returns a new array.
-   `filter()` returns a new array containing all matching elements.
-   `find()` returns the first matching element or `undefined`.
-   `some()` checks whether at least one element matches and returns a
    boolean.
-   `every()` checks whether all elements match and returns a boolean.
-   `reduce()` combines elements into one accumulated result.

## 9. Module 6 progress

-   Chapter 1 --- Callback Fundamentals: **COMPLETED**
-   Chapter 2 --- Synchronous vs Asynchronous Callbacks: **COMPLETED**
-   Chapter 3 --- Callbacks with Array Methods: **COMPLETED**
-   Chapter 4 --- Callbacks in React: **COMPLETED**
-   Chapter 5 --- Callbacks in Node.js and Express: **COMPLETED**
-   **Next:** Chapter 6 --- Callback Problems and Callback Hell
