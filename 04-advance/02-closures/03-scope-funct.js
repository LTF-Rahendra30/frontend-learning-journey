
// ======== Global Scope ==========
function init(){
    // ========== LOCAL Scope =========
    // Local var
    // let name = 'Bob';

    return function(name){ // Innner Function
        console.log(name);
    }

}

let callName = init();
callName('BOWOK');