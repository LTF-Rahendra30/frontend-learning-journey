
//  ==== Break ====

for (let i =0; i <10; i++){
    if(i === 5){
        break  // to Exits the loop when i = 5
    }
    /* 0
    1
    2
    3
    4
     */
    console.log(i);
}

// -- In While Loop --

let x = 1;
while(x <10){
    if(x === 5){
        break
    }
    console.log(x);
    x++;
    /* 
    1
    2
    3
    4
     */
}

// --- Object ---
const user = {name: "Chloe", age: 18, country:"Japan"};

for(let key in user){
    if (key === 'country'){
        break;
    }
    console.log(user[key]);
    /* 
    Chloe
    18 */
    
}

const array = [1,2,3,4,5];
for (let element of array){
    if (element === 3){
        break;
    }
    console.log(element);
    /* 
    1
    2 */
    
}