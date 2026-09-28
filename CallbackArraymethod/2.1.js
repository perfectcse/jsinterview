const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);

// Output undefined

// Why?

//Because forEach() is designed for performing an action on each element, not creating and returning a transformed array.