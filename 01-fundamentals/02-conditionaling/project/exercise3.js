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

console.log(`Price: ${price}. After Discount: ${finalPrice}`)