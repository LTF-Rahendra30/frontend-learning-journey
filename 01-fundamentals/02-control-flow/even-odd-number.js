
//  ====== Even and Odd number with array as Parameter


// ===== Even Number ====
function displayEvenNumber(number){
    for (const num of number){
        if (num % 2 === 0){
            console.log(num);
        }
    }
}

const arrayEvenNumber = [1,2,3,4,5,6,7,8,9,10];
displayEvenNumber(arrayEvenNumber);
/* 2
4
6
8
10
*/


// ===== Odd Number Function =====

function displayOddNumber(number){
    for(const num of number){
        if(num % 2 != 0){
            console.log(num);            
        }
    }
}
const arrayOddNumber = [1,2,3,4,5,6,7,8,9,10];
displayOddNumber(arrayOddNumber);
/* 1
3
5
7
9 */