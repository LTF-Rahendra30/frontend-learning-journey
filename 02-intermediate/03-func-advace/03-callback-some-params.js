// ======= CALCULATE TWO FUNCTION ======

function calculate(a,b,callback){
    const result = a + b;
    callback(result,a,b);
}

calculate(90,10, (resultCalc, numA, numB) => {
    console.log(`${numA} + ${numB},Result is: ${resultCalc}`);
    
})


// =========== CALLBACK WITH NAMED FUNCTION ===========

function ending(){
    console.log("Proccess end");
}

function startProccess(callback){
    console.log("Proccess start");
    callback()
}

// ---------- Usage --------
startProccess(ending);
/* 
Proccess start
Proccess end */