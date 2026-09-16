// ============= bus passenger ============

let passenger = ['chloe',undefined, 'dody'];
const addPassager = function(name,psgr){
    if(psgr.length === 0){
        psgr.push(name)
        return psgr;
    } else{
        for(let i = 0; i < psgr.length; i++){
            if(psgr[i] === undefined){
                psgr[i] = name;
                return psgr
            }
        }
    }
}

console.log(addPassager("Bob",passenger));
// console.log(addPassager(undefined,passenger));
// console.log(addPassager("Bb",passenger));



