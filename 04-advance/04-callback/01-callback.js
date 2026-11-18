function thisCallBack(){
    console.log("This is callback");
    
}

function runCallBack(run){
    run();
    console.log('Callback running...');
    
}

runCallBack(thisCallBack);

// This is callback
// Callback running...



// Make simple

function runCallBack2(run){
    run();
}

runCallBack2(() => console.log("Callback run 2")
)
// Callback run 2