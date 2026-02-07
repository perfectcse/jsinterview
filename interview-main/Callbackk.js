function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function bye() { console.log("Bye!"); }
greet("Visha", bye);
