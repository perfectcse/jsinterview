// Q5. How Do We Return an Object Using an Arrow Function?

const getuser = () => ({
    name: "Vishal",
    age: 16,
    contact: 783832954,
    email: 'acmt@gmail.com'
});
console.log(getuser());

// Note 
//We wrap the object inside parentheses () so JavaScript understands that {} represents an object rather than a function body.

//Q6. Can We Return an Array Implicitly?
const getskills = () => 
    ["React","javascript","sql"];
console.log(getskills());



// Arrow functions with implicit returns are commonly used with map().

const skills =
[
"Node.js",
"Sql",
"mysql",
];
const result  = skills.map(
    skills => skills.toUpperCase()
);
console.log(result);