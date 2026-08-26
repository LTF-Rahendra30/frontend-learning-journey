// ============ SHOPPING CART SYSTEM 🛒 ==============


// ------ Catalog Product -----
const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 3, category: "Electronics" },
    { id: 2, name: "Book", price: 100, stock: 10, category: "Hoby" },
    { id: 3, name: "Keyboard", price: 1000, stock: 5, category: "Electronics"},
    { id: 4, name: "Shoes", price: 200, stock: 15, category: "Fashion"},
    { id: 5, name: "Jacket", price: 500, stock: 10, category: "Fashion"},
    { id: 6, name: "Smartphone", price: 800, stock: 2, category: "Electronics" },
    { id: 7, name: "Monitor", price: 300, stock: 0, category: "Electronics" },
    { id: 8, name: "Novel", price: 15, stock: 4, category: "Hoby" },
    { id: 9, name: "T-Shirt", price: 50, stock: 0, category: "Fashion" },
    { id: 10, name: "Backpack", price: 70, stock: 3, category: "Fashion" }
];


// ----- Cart ----
const chart = {
    items: [],
    subTotal: 0,
    discount:0,
    tax:0,
    finalTotal:0
}

// -------- Add chart function ----------
function addToCart(productId, qty){
    if (qty <= 0){
        console.log("Quantity must be >= 0");
        return;
    }

    let product = null;
    for(let i = 0; i < products.length; i++){
        if (products[i] === productId){
            product = products[i];
            break;
        }
    }

    if(!product){
        console.log("Product not found");
        return;
    }
}