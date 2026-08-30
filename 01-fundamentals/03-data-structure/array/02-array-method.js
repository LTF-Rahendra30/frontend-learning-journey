let number = [1,2,3,4,5];

// ---- PUSH METHOD ----
// ADDED ELEMENT IN ENDNOF ARRAY INDEX 
number.push(6,7,8);
console.log(number);
// [ 1, 2, 3, 4, 5, 6,, 7, 8]


// --------- Unshift --------
// Added element in the beginning of array
number.unshift("Beginning array");
console.log(number);
// [ 'Beginning array', 1, 2, 3, 4, 5, 6, 7, 8 ]



// ----------- SPLICE ---------
// delete,change and added new element in array


// ------ Delete --------
const buah = ["Apel", "Pisang", "Jeruk", "Mangga"];
console.log(buah);
// [ 'Apel', 'Pisang', 'Jeruk', 'Mangga' ]

buah.splice(1,1); // delete form index 1, amount index that delete is 1
console.log(buah);
// [ 'Apel', 'Jeruk', 'Mangga' ]

// ------- Add New element ---
const language = ["HTML", "CSS", "JS"];
console.log(language);

// from index 2, delete 0, then added :
language.splice(2,0, "Python", "PHP");
console.log(language);
// [ 'HTML', 'CSS', 'Python', 'PHP', 'JS' ]


// -------- Edit Element ---------

const color = ['red','green','blue'];
console.log(color);
// [ 'red', 'green', 'blue' ]

color.splice(1,1, "White");
console.log(color);
// [ 'red', 'White', 'blue' 