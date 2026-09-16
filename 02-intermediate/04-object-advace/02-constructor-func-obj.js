// ==== Try create object with this and anonymous method =====

let object = {
    name: "Bob",
    choose: false
};

object.helo = function(){
    console.log(this);
    console.log('Helo');
    
}

object.helo();
/* { name: 'Bob', choose: false, helo: [Function (anonymous)] }
*/


// ==== CONSTRUCTOR FUNCTION ===

function Helo(){
    console.log(this);
    console.log('helo');
    
}

new Helo();