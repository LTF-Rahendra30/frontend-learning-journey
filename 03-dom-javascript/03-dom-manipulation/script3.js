// ==== APPEND ====

// ----- Add New Produt ----
const productList = document.getElementById('product-list');

const newProduct = document.createElement('div');
newProduct.setAttribute('class','product');
newProduct.textContent = 'Running Shoes'
productList.append(newProduct);



// ============ PREPEND ============
const newProduct2 = document.createElement('div');
newProduct2.setAttribute('class','product');
newProduct2.textContent = 'Laptop';
productList.prepend(newProduct2);

