const number = [1,2,3,4];
const sum = number.reduce((accumulator,current) => {
    return accumulator + current
},0);
console.log(sum);
