const person = {
  name: "Visha",
  greet: () => {
    console.log("Hello " + this.name);
  }
};
person.greet();
