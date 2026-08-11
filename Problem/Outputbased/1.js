//const numbers = [1, 2, 3];

//const result = numbers.map(num => {
  //  num * 2;
//});

//console.log(result);
// output : undefined, undefined, undefined,
 
// Correct version — implicit return
//const result = numbers.map(num => num * 2);

//Or explicit return 
//const result = numbers.map(num => {
  //  return num * 2;
//});
// 2,4,6


 //const user = {
    //name: "Vishal",

    //greet: function () {
        //const sayHello = () => {
       //     console.log(this.name);
     //   };

   //     sayHello();
 //   }
//};

//user.greet(); // Output: "Vishal" (the arrow function inherits the 'this' value from the enclosing context)


const User = (name) => {
    this.name = name;
};

const user = new User("Vishal");

console.log(user.name);

// Q.10 
const numbers = [1, 2, 3];

const result = numbers.map(num => {
    return num * 2;
});

console.log(result);