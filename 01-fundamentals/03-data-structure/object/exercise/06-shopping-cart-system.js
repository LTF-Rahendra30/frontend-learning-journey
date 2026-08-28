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

// ======== CALCULATE SUBTOTAL ========
function calculateSubtotal(){
    let subTotal = 0;
    for (let i = 0; i < cart.items.length; i++){
        subTotal += cart.items[i].price * cart.items[i].qty;
    }
    return subTotal;
}

// ============ APPLY DISCOUNT ========
function applyDiscount(percentage){
    if (percentage < 0 || percentage > 100){
        return console.log("Range Discount 0-100%");
    }
    
    // --- CALCULATE DISCOUNT ----
    let subTotal = calculateSubtotal();
    cart.discount = (subTotal * percentage) / 100;
    
    return updateCartTotal();
}

// ============ APPLY TAX =========
function applyTax(percentage){
    if (percentage < 0 || percentage > 100){
        return console.log("Range Tax 0-100%");
    }

    // ----- CALCULATE TAX ---- 
    let subTotalAfterDiscount = calculateSubtotal() - cart.discount;
    cart.tax = (subTotalAfterDiscount * percentage) /100;

    return updateCartTotal();
}


// ============= Calculate final ==========
function calculateFinalTotal(){
    let subTotal = calculateSubtotal();
    return (subTotal - cart.discount) + cart.tax;
}

// ========== Helper Function: Update Total cart ========

function updateCartTotal(){
    cart.subTotal = calculateSubtotal();
    cart.finalTotal = calculateFinalTotal();
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
        if (products[i].id === productId){
            product = products[i];
            break;
        }
    }

    // ---- If not found product in catalog -----
    if(!product){
        return console.log("Product not found"); 
    }

    // ----- Validate stock ------
    if (product.stock < qty){
        return console.log("Stock not enough");
    }

    // ----- Check if the product is already in the cart -----
    let itemInCart;
    for (let i = 0; i < cart.items.length; i++){
        if(cart.items[i].id === productId){
            itemInCart = cart.items[i];
            break;
        }
    }

    // ----- If Product is alredy. Update QTY ----
    if (itemInCart){
        itemInCart.qty += qty;
        itemInCart.itemTotal = itemInCart.price * itemInCart.stock;
    } else{
        // If product not alredy
        let newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: qty,
            itemTotal: product.price * qty
        };
        cart.items.push(newItem);
    }
    // ===== RECALCULATE TOTAL =====
    updateCartTotal();
    console.log(`${product.name} Added in cart`);
    
}



// ========= REMOVE FROM CART LOGIC ============

function removeFromCart(productId){

    // ==== Find Catalog product ====
    let indexToRemove = -1;
    for (let i = 0; i < cart.items.length; i++){
        if(cart.items[i].id === productId){
            indexToRemove = i;
            break;
        }
    }

    // ===== IF FOUND: DELETE =======
    if (indexToRemove !== -1){
        cart.items.splice(indexToRemove, 1);
        console.log("Product Removed");
        updateCartTotal();
    } else{
        console.log("Product not found");
        
    }
}


// ========= DISPLAY CART ===========
function displayCart(){
    console.log("=====================");
    // loop all items 
    for (i = 0; i < cart.items.length; i++){
        let item = cart.items[i];
        console.log(`
Name: ${item.name}
Quantyty: ${item.qty}
Price: ${item.price}
Total Item: ${item.itemTotal}
`);
    }
    console.log("=====================");
    console.log(`
"Subtotal: ${cart.subTotal}
Discount: ${cart.discount}
Tax: ${cart.tax}
Final Total: ${cart.finalTotal}
`);
    
}




// ============= TESTING AREA ==========
addToCart(1,3);
applyDiscount(10);
applyTax(10)
displayCart()
console.log(cart);
