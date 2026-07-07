function expect(val) {
    return {
        toBe(expected) {
            if (val === expected) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe(expected) {
            if (val !== expected) {
                return true;
            }
            throw new Error("Equal");
        }
    };
}

console.log(expect(5).toBe(5));      // true
console.log(expect(5).notToBe(6));   // true

// Uncomment to test errors:
// console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(5));