// ======= CALCULATE TWO FUNCTION ======

function calculate(a,b,callback){
    const result = a + b;
    callback(result,a,b);
}

calculate(90,10, (resultCalc, numA, numB) => {
    console.log(`${numA} + ${numB},Result is: ${resultCalc}`);
    
})