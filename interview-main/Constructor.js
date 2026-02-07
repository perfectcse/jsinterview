function Person(name) {
  this.name = name;
}

const ArrowPerson = (name) => {
  this.name = name;
}

const p1 = new Person("John");
const p2 = new ArrowPerson("Doe");
