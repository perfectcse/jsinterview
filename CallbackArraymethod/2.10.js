const users = [
  { name: "Vishal", age: 24 },
  { name: "Rahul", age: 17 },
  { name: "Aman", age: 22 }
];

const adults = users.filter((user) => {
  return user.age >= 18;
});

console.log(adults);


// "filter() is an array method that executes a 
// callback for each element and returns
//  a new array containing only the elements for which the callback returns true."