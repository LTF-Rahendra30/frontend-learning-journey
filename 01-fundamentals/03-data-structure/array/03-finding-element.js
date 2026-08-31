// PRIMITIVE

const number = [1,2,3,4,5];

// ---- Finding Index in element ----
const indexOfThree = number.indexOf(3);
console.log(indexOfThree);  //2


// ------ Finding Last index ---------
const person = ["Andrew","Bob","Chloe", "Dory","Chloe"];

const posisition = person.lastIndexOf("Chloe");
console.log(posisition); // 4

// ---- Finding index but the element is unknown ----

const num = [1,2,3,4,5];
const indexOfSix = num.indexOf(6);
// console.log(indexOfSix); // -1

// --- Solve ---
if (indexOfSix !== -1){
    console.log(indexOfSix);

} else{
    console.log("6 is not found in the array");
    
}
 