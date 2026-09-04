const number = ['1','2','3','4','5'];

// manual tric
const n = number[0];
console.log(n);


// Destructuring Array
// const [a,b,c] = number;
// console.log(a,b,c);
// 1 2 3

// Spread operator

const [a,b,c, ...rest] = number;
console.log(rest);
// [ '4', '5' ]