const personMethod = {
    eat : function(amnt){
        this.energy += amnt;
        console.log(`Your eat ${this.energy} times`);
        
    },
    play : function(hours){
        this.energy -= hours;
        console.log(`You're play ${hours}`);
        
    }
}

// ========= Object Create ======
function Person(name,age,energy){
    let person = Object.create(personMethod);

    person.name = name;
    person.age = age;
    person.energy = energy;
    
    return person;
}
const person1 = Person('Konto',11,100);
console.log(person1);
console.log(person1.eat(10));
console.log(person1);
/* 
{ name: 'Konto', age: 11, energy: 100 }
Your eat 110 times
undefined
{ name: 'Konto', age: 11, energy: 110 }
 */