// : Exercise: Mini E-Commerce Cart

const products = [
    {id:1,name:"Basic Tee",category:"clothing",price:50,stock:10},
    {id:2,name:"Overzied Hoodie",category:"clothing",price:150,stock:0},
    {id:3,name:"Pants",category:"clothing",price:200,stock:4},
    {id:4,name:"Running Shoes",category:"footwear",price:400,stock:5},
    {id:5,name:"Casual Shoes",category:"footwear",price:300,stock:0},
    {id:6,name:"Canvas Bag",category:"accessories",price:100,stock:8},
    {id:7,name:"Digital Watch",category:"accessories",price:300,stock:2},
    {id:8,name:"Baseball Cap",category:"accessories",price:80,stock:3},
]

// ===== cart =====
const cart = [
    {
        productId: 1,
        quantity: 2
    },
    {
        productId: 3,
        quantity: 1
    },
    {
        productId: 4,
        quantity: 2
    },
    {
        productId: 6,
        quantity: 1
    }
];
// ==== GET ALREDY PRODUCT ====
function getAvailableProducts(porduct){
    const result = porduct.filter(item => {
        return item.stock > 0;
    })
    return result;
}


// ====== FILTER BY CATEGORY =======
function getProductsByCategory(category,product){
    const result = product.filter((validProduct) => {
        return validProduct.category === category;
    })
    return result;
}

// console.log(getProductsByCategory('footwear',products));


// ====== GET DETAILS CART FUNCION ======

function getCartDetails(cart, products) {
    const result = cart.map((item) => {
        const product = products.find((validProduct) => {
            return validProduct.id === item.productId;
        })
        return {...product,...item}
    })
    return result;
}



// ========= CALCULATE SUBTOTAL SINGLE OBJECT OF CART =========
function calculateSubtotals(cartDetails) {
    const result = cartDetails.map((item) => {
        const subtotal = item.price * item.quantity;
        return{
            ...item,
            subtotal: subtotal
        }
    })
    return result;
}



// ============ CALCULATE WHOLE TOTAL IN THE CART ==========
function calculateTotal(cartDetails){
    const total = cartDetails.reduce((acc,item) => {
        return acc + item.subtotal
    },0)
    return total;
}



// ========= CALCULATE DISCOUNT =========
function calculateDiscount(total){
    let discount = 0;
    
    if(total >= 1000){
        discount = 0.10;
    }else if(total >= 500){
        discount = 0.05;
    }
    return total * discount;
}


// ========= CHEKOUT =========
function checkout(cart,product){
    const item = getCartDetails(cart,product);
    const subtotal = calculateSubtotals(item);
    const total = calculateTotal(subtotal);
    const discount = calculateDiscount(total);
    const finaltotal = total - discount;
    return {
        items: subtotal,
        total: total,
        discount: discount,
        finaltotal: finaltotal
    }

}

const result = checkout(cart,products);
console.log(result);
