
// ==== Simple database ready for  checkout =====
let cart = [
    { id: 1, name: 'Basic Tee', price: 50000, quantity: 2 , category: 'Chlothing'},
    { id: 2, name: 'Oversized Hoodie', price: 150000, quantity: 1 , category: 'Chlothing'},
    { id: 3, name: 'Pants', price: 200000, quantity: 1 , category: 'Chlothing'},
    { id: 4, name: 'Running Shoes', price: 400000, quantity: 1 , category: 'Footwear'},
];
const productList = document.getElementById('product-list');
const  emptySteteContainer = document.getElementById('empty-stete-container');
const cartSummaryContainer = document.querySelector('.sidebar .cart-summary');


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

        <div class="product-qty-wrapper">
            <div class="product-qty">
            <button class="qty-btn decrease" data-action="decrease">−</button>
            <input type="number" class="qty-input" value="${product.quantity}" readonly>
            <button class="qty-btn increase" data-action="increase">+</button>
            </div>
            
            <div class="product-total">
            <span id="item-total-${product.id}">Rp ${product.price * product.quantity}</span>
            </div>
            
            <button class="delete-btn" data-action="delete">🗑️</button>
        </div>
    </li>
    `).join('');

}
let itemCount;
// ====== Header Cart =====
const cartHeader = document.querySelector('#cart-section .cart-header')
function renderHeaderCart(){
    cartHeader.innerHTML = `
        <h2>Produk</h2>
        <span>${itemCount} Item</span>`
}





// ========== RENDER CART SUMMARY SIDEBAR =======

const discount = 0.10;
let discountApplied = false;

function cartSummaryRender(){
    const subtotal = cart.reduce((acc,item) => acc + item.price * item.quantity, 0);
    const shippingCost = subtotal * 0.01;
    const discountPrice = discountApplied ? subtotal * discount : 0;
    const totalPayment = subtotal + shippingCost - discountPrice;

    cartSummaryContainer.innerHTML = `
        <h3>Ringkasan Belanja</h3>
        <div class="summary-content">
            <div class="summary-row">
                <span>Subtotal</span>
                <span id="subtotal">Rp ${subtotal}</span>
            </div>
            <div class="summary-row discount">
                <span>Diskon</span>
                <span id="discount-amount">- Rp ${discountPrice}</span>
            </div>
            <div class="summary-row shipping">
                <div class="shipping-info">
                    <span>Ongkos Kirim</span>
                    <p>Ongkir 1% dari subtotal belanjaan</p>
                </div>
                <span id="shipping-cost">Rp ${shippingCost}</span>
            </div>
            <div class="summary-row total">
                <strong>Total</strong>
                <strong id="total-price">Rp ${totalPayment}</strong>
            </div>
            <button id="checkout-btn">Checkout Sekarang</button>
        </div>
    `
}


// ======= EVENTS DELEATION FOR DELETE ITEM PRODUCT =======

productList.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-btn')){
        const liTarget = event.target.closest('li');
        const idThatDelete = parseInt(liTarget.getAttribute('data-product-id'));
        
        // Delete from Array JS
        cart = cart.filter(item => item.id !== idThatDelete);

        // Update Render Page UI
        renderPage();
        
        console.log(cart);
        
    }
    
})
// ====== EMPTY STETE =====

function emptyStetePage(){
    emptySteteContainer.innerHTML= `
    <div class="empty-stete">
        <p>Cart Anda Kosong!</p>
        <p>Silahkan tambahkan product yang ingin anda beli!</p>
    </div>
        `
}


// ======= EVENTS DELEATION FOR GET DISCOUNT  =======

const discountApply = document.getElementById('discount-input');
const discountForm = document.querySelector('.discount-form');

discountForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    if(discountApply.value.trim() === 'WOWOK123'){
        discountApplied = true;
        renderPage();
        
    }else{
        discountApplied = false;
        renderPage();
    }
})





// ==== RENDER PAGE FUNCTION ======
function renderPage(){
    // ------ Calculate item count -----
    itemCount = cart.length;
    
    renderHeaderCart();
    renderCart();
    
    if(cart.length === 0){
        emptyStetePage();
    }else{
        emptySteteContainer.inert = ``
    }
    cartSummaryRender();
}

// ----- Render When Load Web ----
renderPage();