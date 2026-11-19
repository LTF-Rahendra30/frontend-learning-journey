const number = [-1,8,9,1,4,-5,-4,3,2,9];

// --- Get number >= 3 ----

const theNumber = number.filter(n => n >= 3);
console.log(theNumber);
// [ 8, 9, 4, 3, 9 ]


// ----- Mapp multiple whole of array with 2 --------
const multiple = number.map(n => n * 2);
console.log(multiple);
/* [
   -2, 16, 18, 2,  8,
  -10, -8,  6, 4, 18
]
 */


// ---- REDUCE -----
// Calculate whole element of the array
const calculate = number.reduce((acc,n) => acc + n,0)
console.log(calculate);
// 26