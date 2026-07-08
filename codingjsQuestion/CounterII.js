// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
function createCounter(init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = init)
    };
}
// Example usage:
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
