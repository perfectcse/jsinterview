const sum = (...sum) =>{
    return sum.reduce ((total,sum) => total + sum, 0);
};
console.log(sum(5,10,15,20));

// You need to write a function that accepts any number of products in a shopping cart.
const cart = (...products ) => {
    console.log(products);
};
cart("Mouse","keyboard","laptop");

// Output Question 1
function demo (){
    console.log(arguments.length);
}
demo(10,20,30,40); // 4

//  Output based Question 2 
const demos = () =>{
    console.log(arguments);
}
demos(10,20); // Reason: The arrow function doesn't create its own arguments.

// output based Questions 3
const sums = (...numbers)=>{
   console.log(numbers.length);
}
sums(1,2,4,5,6,7,8);