const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Mouse" }
];

const result = products.reduce((acc, product) => {
  acc[product.id] = product.name;
  return acc;
}, {});

console.log(result);