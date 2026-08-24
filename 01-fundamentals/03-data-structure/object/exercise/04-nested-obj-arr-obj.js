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
}