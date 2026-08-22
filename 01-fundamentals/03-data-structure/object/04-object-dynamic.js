const person = {
    name: "Bob"
}

// Update Property Object
person.favoriteFood = "Noodels";
person.isMerried = false;
console.log(person);
// { name: 'Bob', favoriteFood: 'Noodels', isMerried: false }


//  Delete Property Object
delete person.isMerried;
console.log(person);
// { name: 'Bob', favoriteFood: 'Noodels' }

// ---- Function Anonim ----
person.eat = function(){
    console.log("Start Eat");
    
}
person.eat();
// Start Eat