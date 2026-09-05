// ========== CALLBACK WITH PARAMETER ======

function prosesNama(nama,callback){
    const result = nama.toUpperCase();
    callback(result);
}

prosesNama("bob", function(resultName){
    console.log(`Name: ${resultName}`);
});
// Name: BOB

// ---------- arrow function ---------
function multiply(agrs,callback){
    callback(agrs ** 2);
    /* ==== >  console.log(`result: ${result}`);
    
    */

}

// ------ Usage ----
multiply(10, resultMultiply => {
    console.log(`result: ${resultMultiply}`);
    // result: 100
})
