function run(callback){
    callback();
}

run(() => {
    console.log("Call Back Running");
    
})


// ====== CALBACK =====

// MAIN FUNCTION
function jalankan(callback){
    callback();
}

// FUNCTION AS A ARGUMENT IN MAIN FUNCTION
function Hello(){
    console.log("Hello");
}

// USAGE 
jalankan(Hello);
// Hello