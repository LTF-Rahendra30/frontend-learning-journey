
//  ====== Even and Odd number with array as Parameter

function displayEvenNumber(number){
    for (const num of number){
        if (num % 2 === 0){
            console.log(num);
        }
    }
}

const array = [1,2,3,4,5,6,7,8,9,10];
displayEvenNumber(array);
