// ⭐ Question 1
const add = (a,b) => a+b ;
 console.log(add(10,20));

 // ⭐ Question 2
const adds = (d, c) => {

    d + c;

};

console.log(adds(10,20));

// Question 3
const square = (x) => x*x;
console.log(square(5));

// Qustion 4 
const user =() => ({ 
    name: "Vishal"
});
console.log(user());

// Question 5 
const users = () => {

    name:"Vishal";

};

console.log(users());

// Question 6
const Greet  = () => {
    console.log("Hello")
}; 
Greet();

// Question 7 
const greets = () => {

    return "Hello";

};

console.log(greets());

// Questions 
const go = () => {

    console.log("Hello");

    return;

};

console.log(go());


// Question 9
const ad = (a,b)=>{

    return

    a+b;

}

console.log(ad(10,20)); 

// Question 10 
const demo=[1,2,3,];
const  result = demo.map(num=>num*2);
console.log(result);

// Question 11 
const rows=[1,2,3];

const res=rows.map(

num=>{

num*2;

}

);

console.log(res);

// Question 12 
const flow= (...args)=>{
console.log(args.length);
}
flow(50,60,70);

// Question 13 
const boy =(name)=>{
    this.name=name;
}
 new boy("Vishal");

// Question 14 
const user={

name:"Vishal",

greet:()=>{

console.log(this.name);

}

}

user.greet();

// It does not print "Vishal" because the arrow function doesn't create its own this. It inherits this from its surrounding scope instead of binding this to user.

// Question 15 
