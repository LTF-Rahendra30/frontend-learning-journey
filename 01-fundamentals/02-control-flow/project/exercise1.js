// Calculator with Arithmetic + Assignment

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