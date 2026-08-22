function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finished() {
    console.log("Task completed");
}

greet("Vishal", finished);
