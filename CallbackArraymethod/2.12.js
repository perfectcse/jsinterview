const numbers = [10, 20, 30, 40];

const result = numbers.filter((num, index) => {
  return index % 2 === 0;
});

console.log(result);