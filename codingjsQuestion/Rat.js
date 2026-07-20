// Without a constructor:
const student1 = {
    name: "Vishal",
    age: 23
};

const student2 = {
    name: "Rahul",
    age: 22
};

const student3 = {
    name: "Amit",
    age: 24
};

console.log(student1);
console.log(student2);
console.log(student3);



// with a constructor
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const s1 = new Student("Vishal",23);
const s2 = new Student("Rahul",22);
const s3 = new Student("Amit",24);