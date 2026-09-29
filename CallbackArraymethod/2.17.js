//Pattern 2 — Counting Items with reduce()

//Suppose we have an array of numbers and want to count how many numbers are greater than 10.

const numbers = [5, 15, 20, 8, 25];

const count = numbers.reduce((acc, num) => {
  return num > 10 ? acc + 1 : acc;
}, 0);

console.log(count); // 3 

// pattern 
//condition true  → acc + 1
//condition false → acc
