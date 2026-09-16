// ====== FUNCTION DECLARATION TO CREATE OBJECT ========

function createObject(name,email,city){
    let user = {};
    user.name = name;
    user.email = email;
    user.city = city
    return user;
}

console.log(createObject("Bob",true,"London"));
// { name: 'Bob', email: true, city: 'London' }


// ===== CREATE OBJECT WITH CONSTRUCTOR ====

function AddUser(name,email,city){
    this.name = name;
    this.email = email;
    this.city = city;
}

const user1 = new AddUser("Chloe",false,"Jogja");
console.log(user1);
// AddUser { name: 'Chloe', email: false, city: 'Jogja' }
