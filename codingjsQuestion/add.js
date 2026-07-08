//(1).write a function that adds two numbers any number of  value 
function add (...numbers){
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(add(20,30));

// (2) coding Question 
// find the largest number 
function largest (...number){
    return Math.max(...number);
}
console.log(largest(30,50,60,90));