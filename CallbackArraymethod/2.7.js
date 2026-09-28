const numbers = [2, 4, 6];

const result = numbers.map((num) => {
  return num * num;
});

console.log(result);

// Original array → callback → returned value → new array
//[2, 4, 6]      → num*num → [4,16,36]