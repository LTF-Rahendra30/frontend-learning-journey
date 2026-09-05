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
    const result = agrs ** 2;
    callback(result);
    /* ==== >  console.log(`result: ${resulr}`);
    
    */

}

// ------ Usage ----
multiply(10, resultMultiply => {
    console.log(`result: ${resultMultiply}`);
    // result: 100
})
