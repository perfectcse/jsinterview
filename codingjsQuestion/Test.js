// Regular function
function greet1() {
    console.log(this.name);
}

greet1.call(user); // Vishal

// Arrow function
const greet2 = () => {
    console.log(this.name);
};

greet2.call(user); // Does not use user as this