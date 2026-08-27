// ============ SHOPPING CART SYSTEM 🛒 ==============
/* 
---------------- RULES ----------------
1. Add/remove produk
2. alculate subtotal
3. Apply discount
4. Calculate tax
5. Final total

*/

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
const cart = {
    items: [],
    subTotal: 0,
    discount:0,
    tax:0,
    finalTotal:0
}

// -------- Add cart function ----------
function addToCart(productId, qty){
    // ==== VALIDATE QUANTITY ====
    if (qty <= 0){   
        return console.log("Quantity must be >= 0");;
    }

    // ==== Find Product in catalog ====
    let product = null;
    for(let i = 0; i < products.length; i++){
        if (products[i] === productId){
            product = products[i];
            break;
        }
    }

    // ---- If not found product in catalog -----
    if(!product){
        return console.log("Product not found"); 
    }

    // ----- Validate stock ------
    if (product.stock > qty){
        return console.log("Stock not enough");
    }

    // ----- Check if the product is already in the cart -----
    let itemInCart;
    for (let i = 0; i < cart.items.length; i++){
        if(cart.items[i] === productId){
            itemInCart = cart.items;
            break;
        }
    }

    // ----- If Product is alredy. Update QTY ----
    if (itemInCart){
        itemInCart.stock += qty;
        itemInCart.itemTotal = itemInCart.price * itemInCart.stock;
    }

}