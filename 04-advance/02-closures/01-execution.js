


// ===== EXECUTION, HOISTING, SCOPE  ====
const name = 'Bob';
console.log(name);

// ----- CREATION PHASE, GLOBAL SCOPE ----
// name = undefined
// name function = func()
// Hoisting
// window = global object
// this = window


const name1 = "Bob";
const age = 11;

console.log(sayHello());
function sayHello(){
    return `Helo my name ${name1}, Age ${age}`;
    
}