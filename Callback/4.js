function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

processUser("Vishal", function () {
    console.log("User processed");
});

console.log("End");