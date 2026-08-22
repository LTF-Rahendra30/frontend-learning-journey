// Pascal Notation

function Dog(name,weight,age){
    // this = {}

    // Add properties to this
    this.name = name;
    this.weight = weight;
    this.age = age;

    // Function anonim
    this.eat = function (){
        console.log(this.name + 'Chomp');
        
    }
    this.bark = function (){
        console.log(this.nam + 'Whoof');
        
    }

    // return this;
}

const anotherDog = new Dog("Agy",10,3);
console.log(anotherDog);
