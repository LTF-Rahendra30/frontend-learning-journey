// ============ Nullish Coalescing Operator =============

let name = null;
const result = name ?? false;
// which returns its right-hand side operand when its left-hand side operand is null or undefined


console.log(result);
// Flase


// ======= Manual, not Sugar sytax

let age = null;
const result2 = (age !== null && age !== undefined) ? age : false;
console.log(result2);
// false