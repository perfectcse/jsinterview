const numbers = [5, 10, 15];

const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(total);


// When initialValue is provided, it becomes the initial accumulator.
//  Without it, the first array element becomes the initial accumulator,
//  and the iteration starts from the second element.