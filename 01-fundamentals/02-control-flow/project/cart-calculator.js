/* Jika qty < 1, skip (invalid)
If total >= 1k, get discount 10%
If total >= 2k, get discount 15% */

// Example Cart
const carts = [
  { name: "Keyboard", price: 5000, qty: 1 },
  { name: "Mouse", price: 1000, qty: 2 },
  { name: "Monitor", price: 0, qty: 1 }  // Invalid, skip
];

function calculateChartPrice(cart){
    let subTotal = 0;

    for (let i = 0; i < cart.length; i++){
        const item = cart[i];

        // validation valid chart item & price
        if (item.qty >= 1 && item.price > 0){
            subTotal += item.price * item.qty
        }
    }

    // Calculate Discount 
    let discountRete = 0;
    if(subTotal >= 5000){
        discountRete = 0.2;
    } else if (subTotal >= 3000){
        discountRete = 0.1;
    }

    const discount = subTotal * discountRete;
    const total = subTotal - discount;

    return {subTotal, discount, total};
}


console.log(calculateChartPrice(carts));
