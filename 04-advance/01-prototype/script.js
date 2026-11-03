// ==== OBJECT LITERAL =====

let student = {
    name: "budi",
    age: 12,
    gender: "Female",
    caloryBurn: 0,
    walk: function(steps){
        let calory = steps * 10
        this.caloryBurn = this.caloryBurn + calory;
        console.log(`Total Calory burn: ${this.caloryBurn}`);
        
    }
}



// ===== FUNCTION DECLARATION ======
function Person(name,age,eat){
    let person = {}
    person.name = name;
    person.age = age;
    person.amntEat = eat;

    person.eat = function(amnt){
        this.amntEat += amnt;
        console.log(`Your eat ${this.amntEat} times`);
        
    }

    return person;
}

const person1 = Person('Joko',18,3);
console.log(person1);
console.log(person1.eat(7));

