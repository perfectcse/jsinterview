// Pattern 3 — Building an Array with reduce()

//We know reduce() can produce a number or object. It can also build a new array.

//Example:

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }

  return acc;
}, []);

console.log(evenNumbers); // [2, 4]


// How it works

//Our initial accumulator is an empty array:

//[]



//1 → odd  → don't add → []
//2 → even → add       → [2]
//3 → odd  → don't add → [2]
//4 → even → add       → [2, 4]
//5 → odd  → don't add → [2, 4]

//So here:

//acc → array we're building
//num → current number
//[] → initial value