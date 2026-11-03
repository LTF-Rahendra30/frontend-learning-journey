

// ======== CONSTRUCTOR FUNCTION =============

function Person(name,age,energy){
    this.name = name;
    this.age = age;
    this.energy = energy;

    // method
    this.eat = (amount) => {
        this.energy += amount;
    }
    this.play = (amount) => {
        this.energy -= amount;
    }
}

const person1 = new Person('Bob',12,100);
console.log(person1);
/* Person {
  name: 'Bob',
  age: 12,
  energy: 100,
  eat: [Function (anonymous)],
  play: [Function (anonymous)]
} */
person1.eat(10)
console.log(person1);
/* Person {
    name: 'Bob',
    age: 12,
    energy: 110,
    eat: [Function (anonymous)],
    play: [Function (anonymous)]
    }
    */
person1.play(60);
console.log(person1);

/* Person {
  name: 'Bob',
  age: 12,
  energy: 50,
  eat: [Function (anonymous)],
  play: [Function (anonymous)]
}
 */