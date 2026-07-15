const numbers = [1,2,3,4,];
const doubled = numbers. map(
    number => number*2
);
console.log(doubled);


// Object method Example
const user ={
    name : "Vishal",

    greet(){
        console.log(this.name)
    }
};
user.greet();

// rather than
const user2 ={
    name : "Bikas",

    greet2: () =>{
   console.log(this.name)
    }    
};