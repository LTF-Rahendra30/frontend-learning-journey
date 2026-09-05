// ========== CALLBACK WITH PARAMETER ======

function prosesNama(nama,callback){
    const result = nama.toUpperCase();
    callback(result);
}

prosesNama("bob", function(resultName){
    console.log(`Name: ${resultName}`);
});
// Name: BOB