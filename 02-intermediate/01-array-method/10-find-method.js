// ===== Example ====
const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 0, category: "Electronics" },
    { id: 2, name: "Book", price: 100, stock: 10, category: "Hoby" },
    { id: 3, name: "Keyboard", price: 1000, stock: 0, category: "Electronics"},
    { id: 4, name: "Shoes", price: 200, stock: 15, category: "Fashion"},
    { id: 5, name: "Jacket", price: 500, stock: 0, category: "Fashion"}
];

// ---- FIND METHOD TO FIND SPECIFIC CASE ----

// --- FIND SPECIFIC ID OF PRODUCTS ---
const result = products.find(product => product.id === 4)
console.log(result);

// { id: 4, name: 'Shoes', price: 200, stock: 15, category: 'Fashion' }

// ==== By Function ====
function findProductById(id){
    const result = products.find(product => product.id === id);

    return result ? result :"Not found";
}

console.log(findProductById(1));
/* {
  id: 1,
  name: 'Laptop',
  price: 1500,
  stock: 0,
  category: 'Electronics'
}
 */