function thisCallBack(){
    console.log("This is callback");
    
}

function runCallBack(run){
    run();
    console.log('Callback running...');
    
}

runCallBack(thisCallBack);