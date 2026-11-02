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
    person.eat = eat;

    person.eat = function(amnt){
        this.eat += amnt;
        console.log(`Your eat ${this.eat} times`);
        
    }
}

console.log(pe);
