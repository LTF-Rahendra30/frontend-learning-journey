/* Jika qty < 1, skip (invalid)
If total >= 100k, get discount 10%
If total >= 200k, get discount 15% */

// Example Cart
const cart = [
  { name: "Keyboard", price: 150000, qty: 1 },
  { name: "Mouse", price: 50000, qty: 2 },
  { name: "Monitor", price: 0, qty: 1 }  // Invalid, skip
];

calculateCart(cart);  
// Output: { subtotal: 250000, discount: 37500, total: 212500 }