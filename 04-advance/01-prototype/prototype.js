// const personMethod = {
//     eat : function(amnt){
//         this.energy += amnt;
//         console.log(`Your eat ${this.energy} times`);
        
//     },
//     play : function(hours){
//         this.energy -= hours;
//         console.log(`You're play ${hours}`);
        
//     }
// }

// ========= Object Create ======
function Person(name,age,energy){
    // let person = Object.create(personMethod);
    this.name = name;
    this.age = age;
    this.energy = energy;
    
    // return person;
}
// ==== CREATE METHOD WITH PROTOTYPE ====
Person.prototype.eat = function(amnt){
    this.energy += amnt;
    return `Your eat ${this.energy} times`
}

Person.prototype.play = function(hours){
    this.energy -= hours;
    return `You're play ${hours}`;

}

const person1 = new Person('Bob',12,100);
// Person { name: 'Bob', age: 12, energy: 100 }

console.log(person1);
