// Return "Fizz" if only divisible by 3
// Return "Buzz" if only divisible by 5

function fizzBuzz(num){
    if (num %3 === 0 && num %5 ===0){
        return "FizzBuzz"
    } else if (num %3 === 0){
        return "Fizz";
    } else if(num % 5 === 0){
        return "Buzz"
    } else{
        return num;
    }
}

console.log(fizzBuzz(16));
