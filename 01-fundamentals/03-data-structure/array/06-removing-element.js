const number = [1,2,3,4,5];

// === POP , Delete from last element ===
const lastElement = number.pop();
console.log(number);
console.log(`Last element: ${lastElement}`);

// [ 1, 2, 3, 4 ]
// Last element: 5


// ==== FIRST ELEMENT =====
const firstElement = number.shift();
console.log(number);
console.log(`First element: ${firstElement}`);
/* 
[ 2, 3, 4 ]
First element: 1
 */


// ======= MID ELEMENT With Splice() =====
const buah = ["Apel", "Pisang", "Jeruk", "Mangga"];
buah.splice(0,1); // Delete from index 0, amount delete 1
console.log(buah);
// [ 'Pisang', 'Jeruk', 'Mangga' ]

// ---- Delete 2, from index 0 ----
const alfabet = ['A','B','C','D','E'];
alfabet.splice(0,2);
console.log(alfabet);

// ------ Delete 0 from index 4, and add element ----
alfabet.splice(4,0, 'F','G');
console.log(alfabet);
// [ 'C', 'D', 'E', 'F', 'G' ]



// ----- DELEETE ALL ELEMENT IN ARRAY ----
const language = ["HTML", "CSS", "JS"];
console.log(language);

const deleteAllElement = language.splice(0,language.length);

console.log(`delete all element: ${deleteAllElement}`);
