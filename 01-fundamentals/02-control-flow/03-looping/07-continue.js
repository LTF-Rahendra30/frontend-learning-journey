for(let i = 0; i<10; i++){
    if (i %2 === 0){
        continue; // skipp value of i that  have modulo of 2, Or Even Number
    }
    console.log(i);
    /* 
    1
    3
    5
    7
    9 */
}
//  ===== Array ====
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

for (let fruit of fruits){
    if(fruit === "elderberry"){  // Skipp
        continue; 
    }
    console.log(fruit);
    // apple
    // banana
    // cherry
    // date
    // fig
    // grape
}

// ===== Object =====
const simpleObject = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"]
};

for (let key in simpleObject){
    if(key === "isStudent"){
        continue;
    }
    console.log(simpleObject[key]);
    // Alice
    // 30
    // [ 'reading', 'coding' ]
    
}