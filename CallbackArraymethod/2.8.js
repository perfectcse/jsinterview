const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 1000 }
];

const prices = products.map((product) => {
  return product.price;
});

console.log(prices);

// And the concepts are:

//product → the current object from the array.
//product.price → the price property of that current object.

//“map() iterates over each object in the array. 
// product represents the current object, and product.price accesses its price property.
//  The returned values are collected into a new array.”