const number = [1,2,3,4,5,6,7,8];

// Traditional loop
for (let num of number) console.log(num);


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