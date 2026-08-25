// =============== LOOP + CONDITIONAL + OBJECT LOGIC ==============

// ============= SIMPLE INVENTORY MANAGEMENT ==============


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
// ============ REFACTOR DISPLAY INVENTORY: DRY PRINCIPLE WITH FUNCTION =================

function displayInventory(product){
    console.log( `Product ${product.id} | ${product.name} | Price: ${product.price} | Stock: ${product.stock} | Category: ${product.category}`);
}


// ---------------- TASK A : Loop all product and Display info the product -------------

for (let i = 0; i < products.length; i++){
    displayInventory(products[i]);
    
}


// --------- TODO B: Calculate all of value Inventory-------------
let totalInventoryValue = 0;
for (let i = 0; i < products.length; i++){
    let product = products[i];
    let productvalue = product.price * product.stock;
    
    totalInventoryValue += productvalue
}
console.log(totalInventoryValue);
// 20370


// ----------- TASK C Search product that has low stock (< 5) ----------
for (let i = 0; i < products.length; i ++){
    if (products.stock < 5){
        displayInventory(products[i]);
    }
}


// ------------ TASK D : Calculate Available Product (stock > 0) --------------

let availableProduct = 0;
for (let i =0; i < products.length; i++){
    let product = products[i];
    
    if (product.stock > 0){
        availableProduct++;
    }
}
console.log(`There are ${availableProduct} available product (stock > 0) `);