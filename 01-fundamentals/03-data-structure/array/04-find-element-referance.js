
// =========== FINDING ELEMENT REFERANCE =====

const peapole = [
    {name : "Bob", age: 12},
    {name : "Chloe", age: 18},
    {name : "Charley", age: 15}
];

const person = peapole.find((element) => {
    return element.name === "Bob";
});

console.log(person);


// ---- Usage Find Method for find number > 20 ----
const num = [2,4,6,7,9,12,14,17,18,19,22,25,27];
const result = num.find(n => n > 20);
console.log(result); // 22

// -------- Usage Find method to search uniqie id user ------

const users = [
  { id: 101, nama: 'Andi', peran: 'User' },
  { id: 102, nama: 'Budi', peran: 'Admin' },
  { id: 103, nama: 'Cici', peran: 'User' }
];

function findUserById(id){
    const result = users.find(usr => usr.id === id);
    
    if(!result){
        return "User not found";
    }
    return result; 
}
console.log(findUserById(101));
console.log(findUserById(104));


/* 
{ id: 101, nama: 'Andi', peran: 'User' }
{ id: 102, nama: 'Budi', peran: 'Admin' }
  */