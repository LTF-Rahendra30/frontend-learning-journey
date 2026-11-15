
// ======== Global Scope ==========
function init(){
    // ========== LOCAL Scope =========
    // Local var
    let name = 'Bob';

    function showName(){ // Innner Function
        console.log(name);
    }

    return showName;
}

init();