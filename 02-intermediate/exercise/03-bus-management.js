// ============= bus passenger ============

let passenger = [];
const addPassager = function(name,psgr){
    if(psgr){
        psgr.push(name)
        console.log(psgr);
    } else{
        for(let i = 0; i < psgr.length; i++){
            if(psgr[i] === undefined){
                psgr[i].push(name);
                console.log(psgr);
                
            }
        }
    }
}

addPassager("Bob",passenger);
addPassager(undefined,passenger);
addPassager("B",passenger);
// console.log(passenger);

