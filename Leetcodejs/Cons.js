function createCounter(init) {
    let current = init;

    return {
        increment() {
            return ++current;
        },

        decrement() {
            return --current;
        },

        reset() {
            current = init;
            return current;
        }
    };
}
const counter = createCounter(5);

counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
counter.reset();     // 5