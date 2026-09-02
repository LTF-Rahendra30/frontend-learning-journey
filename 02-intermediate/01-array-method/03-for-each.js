
// ===== USAGE  FOR LOOPING EVERY ELEMENT IN THE ARRAY ==========
const names  = ['Adi', 'Budi', 'Citra'];
names.forEach(name => {
    console.log(`Hello ${name}`);
    /* 
    Hello Adi
    Hello Budi
    Hello Citra */
});



// ===== ACCESS INDEX ELEMENT =====
const color = ['red','green','blue'];

color.forEach((item,index) => {
    console.log(`Index to- ${index} : ${item}`);
    /* 
    Index to- 0 : red
    Index to- 1 : green
    Index to- 2 : blue */
});


// ========== EXAMPLE USECASE BETWEEN FOREACH() AND MAP() =========

const carts = [
    { id: 1, name: "Laptop", price: 1500, stock: 2, category: "Electronics" },
    { id: 2, name: "Book", price: 100, stock: 10, category: "Hoby" },
    { id: 3, name: "Keyboard", price: 1000, stock: 5, category: "Electronics"}
];

let finalPayment = 0;

carts.forEach(item => {
    const subTotal = item.stock * item.price;

    finalPayment += subTotal;
    console.log(`Procduct: ${item.name}, Amount: ${item.stock}, Price: ${item.price}`);
    
})
console.log(`Final Payment: ${finalPayment}`);