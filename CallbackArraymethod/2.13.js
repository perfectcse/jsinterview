const users = [
  { name: "Vishal", age: 24 },
  { name: "Rahul", age: 28 },
  { name: "Aman", age: 28 }
];

const result = users.find((user) => {
  return user.age === 28;
});

console.log(result);