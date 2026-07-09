// 1 No paremater 
const greet = ()=>{
    console.log("Hello");
};
greet();

// 2. One paremeter 
const name = (userName) =>{
    console.log(userName);
};
name("Vishal");

// 3. Mutilple parameter 
const add = (a,b) => {
return  a+b;
};
console.log(add(10,20));

// 4. Returing Value 
const square = num =>{
    return num*num;
}
console.log(square(5));
 

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

{}// Function body
//return → Manually returns the result
//This is called an explicit return
const add = (a, b) => a + b;

console.log(add(10, 20));
 // This is called implicit return 
 