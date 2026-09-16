// ==== Try create object with this and anonymous method =====

let object = {};

object.helo = function(){
    console.log(this);
    console.log('Helo');
    
}

object.helo();
/* { helo: [Function (anonymous)] }
Helo
 */