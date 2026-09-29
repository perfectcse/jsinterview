const numbers = [1, 3, 5, 6, 8];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num * 2);
  }

  return acc;
}, []);

console.log(result);