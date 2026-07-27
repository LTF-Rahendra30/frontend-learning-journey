//  ========= Discount Calculator (Arithmetic + Assignment + Logical) ========

const price = 10000;
const isMember = true;
const minPrice = 1000
let discount = 0;

if (price >= minPrice && isMember === true){
    discount = price * 0.10;
} else if (price >= minPrice && isMember === false){
    discount = price *0.05;
} else{
    discount = 0;
    
}

const finalPrice = price - discount;

console.log(`Price: ${price}.Discount: ${discount}.  After Discount: ${finalPrice}`);

// --- Simplyfiy with function ----

function Discount(price,isMember){
    let finalPrice;
    if (price >=1000 && isMember === true){
        finalPrice = price - (price * 0.1);
    } else if (price>=1000 && isMember === false){
        finalPrice = price - (price * 0.05);
    } else{
        return false;
    }
    return finalPrice; 
}

console.log(Discount(10000,true));