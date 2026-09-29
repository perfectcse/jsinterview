// Pattern 3 — Count values from objects
//This is useful with API data:

const users = [
  { name: "Vishal", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
  { name: "Ravi", active: true }
];

const activeCount = users.reduce((count, user) => {
  return user.active ? count + 1 : count;
}, 0);

console.log(activeCount); // 3 

// count → number of active users so far
//user → current user object
//user.active → condition