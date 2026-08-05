const numbers = [1,2,3,4];
const even = numbers.filter(
    numbers => numbers % 2 === 0 
);
console.log(even);

// filter() method creates a new array with all elements that pass the test implemented by the provided function:
// function name(params) {
//     
// }