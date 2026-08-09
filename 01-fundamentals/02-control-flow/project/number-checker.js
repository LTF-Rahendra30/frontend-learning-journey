// check Number by:
/* 
- Even Number
- Odd number
- Max number
- Min Number */

function analyzeNumbers(numbers){
    let evenNumber = 0;
    let oddNumber = 0;
    let maxNumber = numbers[0];
    let minNumber = numbers[0];

        // Loop num in array
    for (let i = 0; i < numbers.length; i++){
        const num = numbers[i];

        if (num % 2 === 0){
            evenNumber ++;
        } else{
            oddNumber ++;
        }

        if(num > maxNumber) maxNumber = num;
        if (num < minNumber) minNumber = num;
    }

    return {evenNumber, oddNumber,maxNumber,minNumber}
}
let result = analyzeNumbers([2, 5, 8, 12, 3, 7]);
console.log(result);
