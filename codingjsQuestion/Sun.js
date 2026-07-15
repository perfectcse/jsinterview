const user = {
    name: "Vishal",
    age: 23,

    greet: function () {
        console.log(this.name,this.age);
    }
};

user.greet();


// What happens if we separate the method from the object?
const user = {
    name: "Vishal",

    greet: function () {
        console.log(this.name);
    }
};

const sayHello = user.greet;

sayHello(); // Vishal 

// Lexical this 
const user = {
    name: "Vishal",

    greet: function () {
        const showName = () => {
            console.log(this.name);
        };

        showName();
    }
};

user.greet();

// try to understand the concept 
// 1.  user.greet();
// Therefore, inside the normal greet method:
// this === user 
// then the arrow function 
//const showName = () => {
  //  console.log(this.name);
//};
//  user.greet()
      
//Normal greet function gets this = user
      
//Arrow showName has no own this
      
//It inherits this from greet
      
//this.name = "Vishal"
// This is  Lexical [this] 
