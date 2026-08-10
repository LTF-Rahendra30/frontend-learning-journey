// Calculate the cinema ticket price based on age and the type of day (weekday/weekend). Discounts are available for seniors and children, and weekday tickets are cheaper.

/* Base Price : 50k
Weekend: +25%
Age < 12 : -30%
Adult : normal
Elderly: -20%
 */

function calculateTicket(age,isWeekend){
    let price = 50000;

    // Adjust Weekend
    if (isWeekend){
        price += (price * 0.25);
    }
    if (age < 12){
        price -= (price * 0.3);
    }else if(age >= 60){
        price -= (price * 0.2);
    }
    return price;
}
console.log(calculateTicket(13,true)); // ===> 62500
console.log(calculateTicket(13,false)); // ===> 50000
console.log(calculateTicket(10,true)); // ===> 43750
console.log(calculateTicket(10,false)); // ===> 35000
console.log(calculateTicket(65,true)); // ===> 50000
console.log(calculateTicket(65,false)); // ===> 40000