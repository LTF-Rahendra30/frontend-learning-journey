function thisCallBack(){
    console.log("This is callback");
    
}

function runCallBack(run){
    run();
    console.log('Callback running...');
    
}

runCallBack(thisCallBack);




// Make simple

function runCallBack2(run){
    run();
}

runCallBack2(() => console.log("Callback run 2")
)