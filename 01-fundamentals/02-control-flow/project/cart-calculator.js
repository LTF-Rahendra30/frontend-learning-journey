/* Jika qty < 1, skip (invalid)
If total >= 100k, get discount 10%
If total >= 200k, get discount 15% */

// Example Cart
const carts = [
  { name: "Keyboard", price: 1500, qty: 1 },
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Monitor", price: 0, qty: 1 }  // Invalid, skip
];

function calculateChartPrice(cart){
    let subTotal = 0;

    for (let i = 0; i < carts.lenght; i++){
        const item = carts[i];

        // validation valid chart item & price
        if (item.qty >= 1 && item.price > 0){
            subTotal += item.price * item.qty
        }
    }
}