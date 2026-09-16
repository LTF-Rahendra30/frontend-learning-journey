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