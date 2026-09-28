// Synchronous
function process(callback) {
  callback();
}

process(() => console.log("Hello"));


// Asynchronous
function process(callback) {
  setTimeout(callback, 0);
}

process(() => console.log("Hello"));

function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();