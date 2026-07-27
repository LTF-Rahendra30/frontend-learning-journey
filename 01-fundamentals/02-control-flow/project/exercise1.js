// =========== Calculator with Arithmetic + Assignment  =============

let num1 = 10
let num2 = 2
let operator = "+"
let result = null

if (operator === "+"){
    result = num1 + num2
    console.log(result)
} else if(operator === "-"){
    result = num1 - num2
    console.log(result)
} else if(operator === "*"){
    result = num1 * num2
    console.log(result)
}else if(operator === "/"){
    result = num1 / num2
    console.log(result)
} else if(operator === "**"){
    result = num1 ** num2
    console.log(result)
}
else{
    console.log("Nothing")
}
// Output:
// 12
// 8
// 20
// 5
// 100

// ================= Grade Calculator ==========

let score = 90
let grade

if (score >= 85){
    grade = "A"
} else if (score <85 && score >= 70){
    grade = "B"
} else if(score <70 && score >=60){
    grade = "C"
} else if(score <60 && score >=50){
    grade = "D"
} else if(score < 50){
    grade = "E"
} else{
    return false
}

console.log(`Score: ${score}, Grade: ${grade}`)
// Output: Score: 90, Grade: A