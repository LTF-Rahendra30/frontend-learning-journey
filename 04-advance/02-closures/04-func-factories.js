

function sayHello(time){
    return function(name){
        console.log(`Hello ${name}, Good ${time}`);
        
    }
}


let goodMoring = sayHello('Moring');
let goodNight = sayHello('Night');

goodMoring('Bob')
goodNight('Bob')




// ========== EXAMPLE COUNTER WITH INNNER FUNCTION  =========

let add = function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}

let a = add();

console.log(a());
console.log(a());
console.log(a());
