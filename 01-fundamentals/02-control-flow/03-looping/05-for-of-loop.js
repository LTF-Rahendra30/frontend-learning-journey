const number = [1,2,3,4,5];
// --- WITHOUT FOR OF ---

for (let idx =0; idx < number.length; idx++){
    console.log(number[idx]);
    /* 
    1
    2
    3
    4
    5
     */  
}

// ===== WITH FOR OF =====
for(let index of number){
    console.log(index);
    /* 
    1
    2
    3
    4
    5
     */
    
}