

function sayHello(time){
    return function(name){
        console.log(`Hello ${name}, Good ${time}`);
        
    }
}


let goodMoring = sayHello('Moring');
let goodNight = sayHello('Night');

goodMoring('Bob')
goodNight('Bob')