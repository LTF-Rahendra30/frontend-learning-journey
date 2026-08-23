
// Not Independent Object

/* let a = {value: 10};
let b = a;

b.value = 20;

console.log(a);
console.log(b); */
/* 
{ value: 20 }
{ value: 20 } */


// Independent Object
let a = {value: 10};
let b = {};

Object.assign(b,a);

// Representation 2 Diffrerent Object
b.value = 20;
console.log(a);
console.log(b);
// { value: 10 }
// { value: 20 }