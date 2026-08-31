
// =========== FINDING ELEMENT REFERANCE =====

const users = [
    {name : "Bob", age: 12},
    {name : "Chloe", age: 18},
    {name : "Charley", age: 15}
];

const person = users.find(function(e){
    return e.name === "Bob";
});

console.log(person);
