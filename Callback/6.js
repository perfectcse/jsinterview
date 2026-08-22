// Synchronous callback:
function process(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

process(() => {
    console.log("Callback");
});