// ============= bus passenger ============

let passenger = ['chloe',undefined, 'dody'];

// ==== add passager ====
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
            else if(psgr[i] === name){
                console.log("name has add!")
                return psgr;
            }
            else if(i === psgr.length -1){
                psgr.push(name);
                return psgr;
            }
        }
    }
}

// ==== delete passager =====
const deletePasseger = function(name,psgr){
    if(psgr.length === 0){
        console.log("Bus is empty");
    }
}

console.log(addPassager("Bob",passenger));
console.log(addPassager("Bob",passenger));
// console.log(addPassager(undefined,passenger));
// console.log(addPassager("Bb",passenger));



