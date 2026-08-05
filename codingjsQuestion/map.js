const numbers =[1,2,3,4,5,];

const result = numbers.map(
    numbers => numbers *2
);
console.log(result);

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this example, we are multiplying each number in the `numbers` array by 2 and storing the results in the `result` array. The output will be:
// [2, 4, 6, 8, 10]