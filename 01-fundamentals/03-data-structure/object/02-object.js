const cat = {
    name: "Kitty",
    breed: "Persian",
    age: 3,
    eat: function() {
        console.log("Chomp!");
    },
    bark() {
        console.log("Meow");
    }
}

function getCat(name,breed,age){
    return {
        name: name,
        breed: breed,
        age: age,
        eat: function() {
            console.log("Chomp!");
        },
        bark() {
            console.log("Meow");
        }
    }
}

cat.name;

const anotherCat = getCat("Bob","Perisan",3);
console.log(anotherCat.eat(), anotherCat.bark);
