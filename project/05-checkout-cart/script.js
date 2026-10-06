
// ==== Simple database ready for  checkout =====
let cart = [
    { id: 1, name: 'Basic Tee', price: 50000, quantity: 2 },
    { id: 2, name: 'Oversized Hoodie', price: 150000, quantity: 1 },
    { id: 3, name: 'Pants', price: 200000, quantity: 1 },
    { id: 4, name: 'Running Shoes', price: 400000, quantity: 1 },
];
const productList = document.getElementById('product-list');

function renderCart() {
    productList.innerHTML = ``;

    cart.forEach(item => {
        
    })
}