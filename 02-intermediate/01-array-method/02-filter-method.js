// ====== FILTER =====
// TAKE ITEM THAT ELIGIBLE

const number = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = number.filter(num => num %2 === 0);
console.log(evenNumber);
// [ 2, 4, 6, 8, 10 ]

const oddNumber = number.filter(num => num %2 !== 0);
console.log(oddNumber);
// [ 1, 3, 5, 7, 9 ]


// ===== Example ====
const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 0, category: "Electronics" },
    { id: 2, name: "Book", price: 100, stock: 10, category: "Hoby" },
    { id: 3, name: "Keyboard", price: 1000, stock: 0, category: "Electronics"},
    { id: 4, name: "Shoes", price: 200, stock: 15, category: "Fashion"},
    { id: 5, name: "Jacket", price: 500, stock: 0, category: "Fashion"}
];

// ---- Filtering stock product > 0 ----
const validStockProduct = products.filter(product => {
   return product.stock > 0;
})

console.log(products);
console.log(validStockProduct);
