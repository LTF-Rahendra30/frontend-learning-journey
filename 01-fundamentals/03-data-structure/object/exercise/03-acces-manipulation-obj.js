
// ============ Acces and Manipulation Object ==========

const product = {
    name: "Laptop",
    price: 10000,
    stock: 10,
    rating: 4.8,
};

// ---- Access property Object -----
console.log(product.name);
console.log(product.price);
/* Laptop
10000
 */

// ---- Change Value of property object ----
product.stock = 5;


// ---- Update new Property ----
product.discount = 2000;


// --- final Price ----
const finalPrice = product.price - product.discount;
console.log(finalPrice);
// 8000
