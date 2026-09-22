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

// ======= BEFORE ======
const beforeItem = document.getElementsByClassName('product')[2];

const newProduct3 = document.createElement('div');
newProduct3.setAttribute('class','product');
newProduct3.textContent = 'T-Shirt ← baru';
beforeItem.before(newProduct3)



// ========= AFTER ======

const afterItem = document.getElementsByClassName('product')[3];

const newProduct4 = document.createElement('div');
newProduct4.setAttribute('class','product');
newProduct4.textContent = 'Jacket ← baru';

afterItem.after(newProduct4);

// ======= REMOVE ========

const removeItem = afterItem;

// removeItem.remove()


// ====== REPLACE WITH ======
const newProduct5 = document.createElement('div');
newProduct5.setAttribute('class','product');
newProduct5.textContent = 'Mouse ← baru';

removeItem.replaceWith(newProduct5);


// ===== COMBINE WHOLE METHOD =====