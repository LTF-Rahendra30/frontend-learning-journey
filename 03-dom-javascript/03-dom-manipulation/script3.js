// ==== APPEND ====

// ----- Add New Produt ----
const productList = document.getElementById('product-list');

const newProduct = document.createElement('div');
newProduct.setAttribute('class','product');
newProduct.textContent = 'Running Shoes'
productList.append(newProduct);



