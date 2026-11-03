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
function Person(name,age,energy){
    let person = {}
    person.name = name;
    person.age = age;
    person.energy = energy;

    person.eat = function(amnt){
        this.energy += amnt;
        console.log(`Your eat ${this.energy} times`);
        
    }
    person.play = function(hours){
        this.energy -= hours;
        console.log(`You're play ${hours}`);
        
    }
    return person;
}

const person1 = Person('Joko',18,3);
console.log(person1);
// {
    //   name: 'Joko',
    //   age: 18,
    //   energy: 3,
    //   eat: [Function (anonymous)],
    //   play: [Function (anonymous)]
    // }
console.log(person1.eat(7));

console.log(person1);
/*{
    name: 'Joko',
    age: 18,
  energy: 10,
  eat: [Function (anonymous)],
  play: [Function (anonymous)]
  }
  */
 
 console.log(person1.play(5));
 console.log(person1);
/*  {
  name: 'Joko',
  age: 18,
  energy: 5,
  eat: [Function (anonymous)],
  play: [Function (anonymous)]
}
 */