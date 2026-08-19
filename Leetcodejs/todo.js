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
expect(5).toBe(5);       // true
expect(5).notToBe(10);   // true