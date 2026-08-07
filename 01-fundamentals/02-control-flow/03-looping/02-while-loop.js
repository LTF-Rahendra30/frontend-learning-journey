let numbers = [1,2,3,4,5,6,7,8];
let index = 0;

while(index < numbers.length){
    console.log(numbers[index]);
    index ++;
    /* 1
    2
    3
    4
    5
    6
    7
    8 */
}

// While loop with True stetment (To solved infinity Loop)

let sum = 0;
while(true){
    console.log("this loop");
    sum++;

    if (sum === 5)
        break;
    
}