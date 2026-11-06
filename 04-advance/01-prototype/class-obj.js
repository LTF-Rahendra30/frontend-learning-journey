

// ---- CLASS VERSION TO CREATE OBJECT ----

class Person{
    constructor(name,age,energy){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    eat(amnt){
        this.energy += amnt;
        return `Your eat ${this.energy} times`
    }

    play(hours){
        this.energy -= hours;
        return `You're play ${hours}`;
    }
}


const person1 = new Person('Bob',12,70);
const person2 = new Person('Jack',80,100);