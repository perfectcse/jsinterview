function greet(callback) {
    console.log("Hello");
    //callback();
}

function done() {
    console.log("Done");
}

greet(done());

// TypeError because callback is not a function.
