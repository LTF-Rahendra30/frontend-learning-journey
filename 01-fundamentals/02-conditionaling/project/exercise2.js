// ========= EXERCISE 3: Age Validator (Comparison + Nullish Coalescing) ==========

let age = 14;

age = age ?? 18; // nullish coalescing, To be undefined & null data type have default value
let massage;

if (age >= 13 && age <=120){
    massage = "Valid";
} else{
    massage = "Invalid"
}
console.log(`Age: ${age},${massage}`);
// Output:
// Age: 18,Valid

// ---- With  Operator Ternary ----
let massage2 = age >= 13 && age <=120 ? "Valid" : "Invalid";
console.log(`Age: ${age},${massage2}`);
