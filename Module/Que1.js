// Question 1

//What is the difference between a named callback and an anonymous callback? Give an example of both.

function completed() {
    console.log("Done");
}

process(completed);

// "A named callback is a separately defined function that we pass as an argument to another function. An anonymous callback is a function without a name that we directly pass as an argument. Both can act as callbacks."