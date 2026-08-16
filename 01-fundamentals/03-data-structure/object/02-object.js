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

function getCat(name,breed,age,){
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