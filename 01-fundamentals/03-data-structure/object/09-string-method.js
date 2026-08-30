let name = "bob";
console.log(typeof name); // string

let anotherName = new String('Chloe');
console.log(typeof anotherName); // Object


// ----- Include Method ----

let word = "The desentralized";
const included = word.includes("The")
console.log(included); // True


// ----- Start with method ------
const startWith = word.startsWith('T');
console.log(startWith); // true

// ----- End with method ------

const endWith = word.endsWith("d");
console.log(endWith); // true


// ------ Update string method ----
let updateWord = word.replace("The", "Main");
console.log(updateWord);
// Main desentralized