// =========== NESTED OBJECT & ARRAY OF OBJECTS =======

// --- E-commerce Order Object ----

const order ={
    id: "ORD-001",
    customer: {
        name: "Bob",
        email: "bob123@gmail.com",
        address: "Distric Nagoya"
    },
    items: [
        {   id:1, name: "Laptop", price: 1000, qty: 2   },
        {   id:1, name: "Keyboard", price: 500, qty: 2   },
        {   id:1, name: "Mouse", price: 200, qty: 1   }
    ]
};

// =========== Acess data nested ==============:
//    - Who's customer name?
//    - who's first nae product?
//    - How much is the price of the second product??

// ---- Customer Name ----
console.log(order.customer.name);
// Bob

// ----- First name product ----
console.log(order.items[0].name);
// Laptop

// ------ Price of the Second Price -----
console.log(order.items[1].price);
// 500

// ===== Chaange Data ====
// - Customer changes address → update property address
// - Quantity of the third product changes → update quantity

// -------- Change Address ---------
order.customer.address = "Tokyo";
console.log(order.customer);
// { name: 'Bob', email: 'bob123@gmail.com', address: 'Tokyo' }


// -------- Quantity Trid product change --------
order.items[2].qty = 5;
console.log(order.items[2]);
// { id: 1, name: 'Mouse', price: 200, qty: 5 }