
// This function are object in JS
function add(num1,num2){
    return num1 + num2;
}

const n = add;

console.log(n (2,2));
// 4

// Try display parameter in function
console.log(add.length);
// 2 parameters


// ==== Function Constructor ====
function Programmer(name){
    this.name = name;

    // Method
    this.writeCode = function(){
        console.log('Write Code Javascript');
        
    }
}

console.log(Programmer.length);
console.log(Programmer.constructor);
// 1
// [Function: Function]


// Another Syntax

// Anonymous Function 
const Person = new Function('name', `
    this.name = name;
    this.writeCode = function(){
        console.log('Write Code Javascript');
    }
`);

const newPerson = new Person('Bob');
console.log(newPerson);


console.log(newPerson.name);
newPerson.writeCode();
// Bob
// Write Code Javascript


