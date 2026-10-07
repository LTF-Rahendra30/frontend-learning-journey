
// ==== Simple database ready for  checkout =====
let cart = [
    { id: 1, name: 'Basic Tee', price: 50000, quantity: 2 , category: 'Chlothing'},
    { id: 2, name: 'Oversized Hoodie', price: 150000, quantity: 1 , category: 'Chlothing'},
    { id: 3, name: 'Pants', price: 200000, quantity: 1 , category: 'Chlothing'},
    { id: 4, name: 'Running Shoes', price: 400000, quantity: 1 , category: 'Footwear'},
];
const productList = document.getElementById('product-list');

function renderCart() {
    productList.innerHTML = cart.map(product => /* html*/ `
    <li class="product-item" data-product-id="${product.id}">
        <img src="[image]" alt="[name]">
  
        <div class="product-info">
            <h4>${product.name}</h4>
            <p class="category">${product.category}</p>
            <p class="stock">Stok: ${product.q}</p>
            <p class="price">Rp ${product.price}</p>
        </div>

        <div class="product-qty">
            <button class="qty-btn decrease" data-action="decrease">−</button>
            <input type="number" class="qty-input" value="${product.quantity}" readonly>
            <button class="qty-btn increase" data-action="increase">+</button>
        </div>

        <div class="product-total">
            <span id="item-total-${product.id}">Rp ${product.price * product.quantity}</span>
        </div>

        <button class="delete-btn" data-action="delete">🗑️</button>
    </li>
    `).join('');

}
// ====== Header Cart =====
const cartHeader = document.querySelector('#cart-section .cart-header')
function renderHeaderCart(){
    cartHeader.innerHTML = `
        <h2>Produk</h2>
        <span>${cart.length}Item</span>`
}


renderHeaderCart();
renderCart();