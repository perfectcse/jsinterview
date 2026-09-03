function doSomething(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

function greet() {
    console.log("Hello");
}

doSomething(greet);// Start Hello End

// Explanation:

//greet is passed as a function reference.
//callback() executes greet().
//greet() directly prints "Hello".
//Then "End" is printed.