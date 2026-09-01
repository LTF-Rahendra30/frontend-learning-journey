const number = [1,2,3,4,5,6,7,8];

// Traditional loop
// for (let num of number) console.log(num);


// =========== FOR EACH () METHOD =========
number.forEach((num) => {
    console.log(num);
    /* 
    1
    2
    3
    4
    5
    6
    7
    8 */
})

// ------ Indexing ----------
number.forEach((num,index) => {
    console.log(`Index: ${index}, Number: ${num}`);
    /* Index: 0, Number: 1
        Index: 1, Number: 2
        Index: 2, Number: 3
        Index: 3, Number: 4
        Index: 4, Number: 5
        Index: 5, Number: 6
        Index: 6, Number: 7
        Index: 7, Number: 8 */
});

// ---------- traditional indexing ----------
for (let i = 0; i < number.length; i ++){
    console.log(`Index: ${i}, Number: ${number[i]}`);
}