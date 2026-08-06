//Before ES6 function
function greet(){
    console.log("HEllo");
}
console.log(greet());

//After ES6 function
const ball = () => {
    console.log("Hello");
}
console.log(ball());    


// Before ES6, developers often wrote code like this:
//function add (a, b) {
 //   return a + b;
//}


// After ES6, you can write the same function using an arrow function:
//const add = (a,b) => a+b;

// 🌍 Real-World Example 
// Without Arrow Function

//setTimeout(function () {
  //  console.log("Done");
//}, 1000);

setTimeout(() => {
    console.log("Done");
}, 1000);