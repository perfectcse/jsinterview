function greetUser(name, callback) {
  callback(name);
}

function displayGreeting(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

greetUser("Vishal", displayGreeting);


// Why it is correct:
//1. greetUser() accepts two parameters.
//2. callback(name) invokes the callback and passes the name.
//3. displayGreeting() receives the name.
//4. console.log() prints the expected greeting.
//5. displayGreeting is passed as a function reference, not called immediately.